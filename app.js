// App state
let currentCategory = '';
let currentArtisan = null;
let userLocation = null;
let locationWatchId = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Add click handlers to artisan cards
    const artisanCards = document.querySelectorAll('.artisan-card');
    artisanCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            showArtisanList(category);
        });
    });

    // Request location permission after a short delay
    setTimeout(() => {
        showLocationModal();
    }, 1000);
}

function showLocationModal() {
    const modal = document.getElementById('location-modal');
    modal.classList.add('active');
}

function closeLocationModal() {
    const modal = document.getElementById('location-modal');
    modal.classList.remove('active');
}

function requestLocation() {
    closeLocationModal();
    
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // Start watching position for real-time updates
                locationWatchId = navigator.geolocation.watchPosition(
                    function(position) {
                        userLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        updateDistances();
                    },
                    function(error) {
                        console.log('Location watch error:', error);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 60000
                    }
                );
                
                updateDistances();
            },
            function(error) {
                console.log('Geolocation error:', error);
                alert('Unable to get your location. Distance calculation will not be available.');
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance;
}

function formatDistance(distance) {
    if (distance < 1) {
        return Math.round(distance * 1000) + 'm';
    } else {
        return distance.toFixed(1) + 'km';
    }
}

function calculateTravelTime(distance) {
    // Estimate travel time based on Lagos traffic conditions
    // Assuming average speed of 15 km/h in Lagos traffic
    const averageSpeed = 15; // km/h
    const timeInHours = distance / averageSpeed;
    const timeInMinutes = Math.round(timeInHours * 60);
    
    if (timeInMinutes < 60) {
        return timeInMinutes + ' min';
    } else {
        const hours = Math.floor(timeInMinutes / 60);
        const minutes = timeInMinutes % 60;
        return hours + 'h ' + minutes + 'm';
    }
}

function updateDistances() {
    if (!userLocation) return;
    
    const distanceBadges = document.querySelectorAll('.distance-badge');
    distanceBadges.forEach(badge => {
        const artisanId = parseInt(badge.dataset.artisanId);
        const artisan = findArtisanById(artisanId);
        
        if (artisan && artisan.coordinates) {
            const distance = calculateDistance(
                userLocation.lat, userLocation.lng,
                artisan.coordinates.lat, artisan.coordinates.lng
            );
            const travelTime = calculateTravelTime(distance);
            badge.textContent = travelTime;
        }
    });
}

function findArtisanById(id) {
    for (const category in artisansData) {
        const artisan = artisansData[category].find(a => a.id === id);
        if (artisan) return artisan;
    }
    return null;
}

function showMainMenu() {
    document.getElementById('main-menu').classList.add('active');
    document.getElementById('artisan-list').classList.remove('active');
    document.getElementById('artisan-detail').classList.remove('active');
}

function showArtisanList(category) {
    currentCategory = category;
    const categoryData = categoryInfo[category];
    const artisans = artisansData[category];
    
    // Update screen title
    document.getElementById('category-title').textContent = categoryData.title;
    
    // Generate artisan list HTML
    const container = document.getElementById('artisans-container');
    container.innerHTML = '';
    
    artisans.forEach(artisan => {
        const artisanElement = createArtisanListItem(artisan);
        container.appendChild(artisanElement);
    });
    
    // Show artisan list screen
    document.getElementById('main-menu').classList.remove('active');
    document.getElementById('artisan-list').classList.add('active');
    document.getElementById('artisan-detail').classList.remove('active');
    
    // Update distances if location is available
    setTimeout(updateDistances, 100);
}

function createArtisanListItem(artisan) {
    const div = document.createElement('div');
    div.className = 'artisan-item';
    div.onclick = () => showArtisanDetail(artisan);
    
    let distanceHtml = '';
    if (userLocation && artisan.coordinates) {
        const distance = calculateDistance(
            userLocation.lat, userLocation.lng,
            artisan.coordinates.lat, artisan.coordinates.lng
        );
        const travelTime = calculateTravelTime(distance);
        distanceHtml = `<span class="distance-badge" data-artisan-id="${artisan.id}">${travelTime}</span>`;
    }
    
    div.innerHTML = `
        <div class="artisan-header">
            <div class="artisan-name">${artisan.name}</div>
            ${distanceHtml}
        </div>
        <div class="artisan-address">
            <i class="fas fa-map-marker-alt"></i>
            ${artisan.address}
        </div>
        <div class="artisan-phone">
            <i class="fas fa-phone"></i>
            ${artisan.phone}
        </div>
    `;
    
    return div;
}

function showArtisanDetail(artisan) {
    currentArtisan = artisan;
    
    // Update screen title
    document.getElementById('artisan-name').textContent = artisan.name;
    
    // Generate detail content
    const container = document.getElementById('artisan-detail-content');
    
    let distanceInfo = '';
    if (userLocation && artisan.coordinates) {
        const distance = calculateDistance(
            userLocation.lat, userLocation.lng,
            artisan.coordinates.lat, artisan.coordinates.lng
        );
        const travelTime = calculateTravelTime(distance);
        const distanceFormatted = formatDistance(distance);
        distanceInfo = `
            <div class="detail-section">
                <h3><i class="fas fa-route"></i> Distance & Travel Time</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${distanceFormatted} away</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                        <span>Estimated travel time: ${travelTime}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = `
        <img src="${artisan.image}" alt="${artisan.name}" class="detail-image" onerror="this.src='https://via.placeholder.com/400x300?text=Workshop+Image'">
        
        <div class="detail-section">
            <h3><i class="fas fa-info-circle"></i> About</h3>
            <p>${artisan.description}</p>
        </div>
        
        <div class="detail-section">
            <h3><i class="fas fa-tools"></i> Specialties</h3>
            <p>${artisan.specialties.join(', ')}</p>
        </div>
        
        <div class="detail-section">
            <h3><i class="fas fa-star"></i> Experience & Rating</h3>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${artisan.experience} of experience</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-star"></i>
                    <span>${artisan.rating}/5.0 rating</span>
                </div>
            </div>
        </div>
        
        ${distanceInfo}
        
        <div class="detail-section">
            <h3><i class="fas fa-address-book"></i> Contact Information</h3>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${artisan.address}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${artisan.phone}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${artisan.email}</span>
                </div>
            </div>
        </div>
        
        <button class="call-btn" onclick="callArtisan('${artisan.phone}')">
            <i class="fas fa-phone"></i> Call Now
        </button>
        
        <button class="directions-btn" onclick="getDirections(${artisan.coordinates.lat}, ${artisan.coordinates.lng})">
            <i class="fas fa-directions"></i> Get Directions
        </button>
    `;
    
    // Show detail screen
    document.getElementById('artisan-list').classList.remove('active');
    document.getElementById('artisan-detail').classList.add('active');
}

function callArtisan(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

function getDirections(lat, lng) {
    // Open Google Maps with directions
    const destination = `${lat},${lng}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
}

// Cleanup function
window.addEventListener('beforeunload', function() {
    if (locationWatchId) {
        navigator.geolocation.clearWatch(locationWatchId);
    }
});

// Handle back button for mobile browsers
window.addEventListener('popstate', function(event) {
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen.id === 'artisan-detail') {
        showArtisanList(currentCategory);
    } else if (activeScreen.id === 'artisan-list') {
        showMainMenu();
    }
});
