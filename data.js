// Sample artisan data for Lagos, Nigeria
const artisansData = {
    'washing-machine': [
        {
            id: 1,
            name: 'Adebayo Washing Solutions',
            address: '15 Allen Avenue, Ikeja, Lagos',
            phone: '+234 803 456 7890',
            email: 'adebayo.washing@gmail.com',
            specialties: ['Washing Machine Repair', 'Dryer Repair', 'Installation'],
            experience: '8 years',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            coordinates: { lat: 6.6018, lng: 3.3515 },
            description: 'Expert in all brands of washing machines including LG, Samsung, Bosch, and local brands.'
        },
        {
            id: 2,
            name: 'Lagos Appliance Repair Center',
            address: '42 Opebi Road, Ikeja, Lagos',
            phone: '+234 701 234 5678',
            email: 'info@lagosappliance.com',
            specialties: ['Washing Machine Repair', 'Refrigerator Repair', 'Microwave Repair'],
            experience: '12 years',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
            coordinates: { lat: 6.6093, lng: 3.3547 },
            description: 'Professional appliance repair service with certified technicians.'
        },
        {
            id: 3,
            name: 'Kemi Home Appliances',
            address: '8 Admiralty Way, Lekki Phase 1, Lagos',
            phone: '+234 809 876 5432',
            email: 'kemi.appliances@yahoo.com',
            specialties: ['Washing Machine Repair', 'Home Appliance Installation'],
            experience: '6 years',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4474, lng: 3.4539 },
            description: 'Reliable washing machine repair service in Lekki area.'
        }
    ],
    'electrician': [
        {
            id: 4,
            name: 'Power Solutions Nigeria',
            address: '23 Herbert Macaulay Street, Yaba, Lagos',
            phone: '+234 802 345 6789',
            email: 'power.solutions@gmail.com',
            specialties: ['Electrical Installation', 'Wiring', 'Generator Repair'],
            experience: '15 years',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
            coordinates: { lat: 6.5158, lng: 3.3621 },
            description: 'Licensed electricians specializing in residential and commercial electrical work.'
        },
        {
            id: 5,
            name: 'Bright Spark Electrical',
            address: '67 Ikorodu Road, Maryland, Lagos',
            phone: '+234 708 123 4567',
            email: 'brightspark@outlook.com',
            specialties: ['House Wiring', 'Solar Installation', 'Electrical Repairs'],
            experience: '10 years',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1609592308-a9b4e4e1b8c5?w=400&h=300&fit=crop',
            coordinates: { lat: 6.5568, lng: 3.3792 },
            description: 'Expert electrical services including solar panel installation.'
        },
        {
            id: 6,
            name: 'Lagos Electric Works',
            address: '12 Victoria Island, Lagos',
            phone: '+234 805 987 6543',
            email: 'info@lagoselectric.ng',
            specialties: ['Commercial Electrical', 'Emergency Repairs', 'Maintenance'],
            experience: '20 years',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1621905252472-e8592afb8f2f?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4281, lng: 3.4219 },
            description: 'Professional electrical contractors serving Lagos Island and mainland.'
        }
    ],
    'mechanic': [
        {
            id: 7,
            name: 'AutoCare Lagos',
            address: '89 Agege Motor Road, Mushin, Lagos',
            phone: '+234 806 456 7890',
            email: 'autocare.lagos@gmail.com',
            specialties: ['Engine Repair', 'Brake Service', 'Oil Change'],
            experience: '18 years',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1632823469606-c6374f7a75d3?w=400&h=300&fit=crop',
            coordinates: { lat: 6.5244, lng: 3.3792 },
            description: 'Full-service auto repair shop with experienced mechanics.'
        },
        {
            id: 8,
            name: 'Reliable Motors Workshop',
            address: '34 Oshodi-Apapa Expressway, Lagos',
            phone: '+234 703 234 5678',
            email: 'reliable.motors@yahoo.com',
            specialties: ['Car Diagnostics', 'Transmission Repair', 'AC Repair'],
            experience: '14 years',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
            coordinates: { lat: 6.5355, lng: 3.3087 },
            description: 'Modern auto workshop with computerized diagnostic equipment.'
        },
        {
            id: 9,
            name: 'Speedway Auto Repairs',
            address: '56 Ikoyi Road, Ikoyi, Lagos',
            phone: '+234 807 890 1234',
            email: 'speedway.auto@gmail.com',
            specialties: ['Luxury Car Service', 'Body Work', 'Paint Jobs'],
            experience: '12 years',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4474, lng: 3.4219 },
            description: 'Specialist in luxury and imported vehicle repairs.'
        }
    ],
    'plumber': [
        {
            id: 10,
            name: 'AquaFix Plumbing Services',
            address: '21 Surulere Street, Surulere, Lagos',
            phone: '+234 804 567 8901',
            email: 'aquafix.plumbing@gmail.com',
            specialties: ['Pipe Installation', 'Leak Repairs', 'Toilet Repairs'],
            experience: '11 years',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4969, lng: 3.3667 },
            description: 'Professional plumbing services for residential and commercial properties.'
        },
        {
            id: 11,
            name: 'Lagos Water Works',
            address: '78 Gbagada Expressway, Gbagada, Lagos',
            phone: '+234 709 678 9012',
            email: 'lagos.waterworks@outlook.com',
            specialties: ['Water System Installation', 'Drainage', 'Septic Tank Services'],
            experience: '16 years',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1581092918484-8313d1a6b7f3?w=400&h=300&fit=crop',
            coordinates: { lat: 6.5569, lng: 3.3792 },
            description: 'Complete water and drainage solutions for Lagos homes and businesses.'
        },
        {
            id: 12,
            name: 'FlowMaster Plumbers',
            address: '45 Ajah Road, Ajah, Lagos',
            phone: '+234 801 789 0123',
            email: 'flowmaster@gmail.com',
            specialties: ['Emergency Plumbing', 'Bathroom Installations', 'Kitchen Plumbing'],
            experience: '9 years',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4698, lng: 3.5852 },
            description: '24/7 emergency plumbing services in Ajah and surrounding areas.'
        }
    ],
    'phone-repairer': [
        {
            id: 13,
            name: 'TechFix Mobile Repairs',
            address: '12 Computer Village, Ikeja, Lagos',
            phone: '+234 802 890 1234',
            email: 'techfix.mobile@gmail.com',
            specialties: ['Screen Replacement', 'Battery Replacement', 'Software Issues'],
            experience: '7 years',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop',
            coordinates: { lat: 6.6018, lng: 3.3515 },
            description: 'Expert mobile phone repairs for all brands including iPhone, Samsung, and Android devices.'
        },
        {
            id: 14,
            name: 'Mobile Doctor Lagos',
            address: '67 Alaba International Market, Ojo, Lagos',
            phone: '+234 705 901 2345',
            email: 'mobiledoctor@yahoo.com',
            specialties: ['Water Damage Repair', 'Motherboard Repair', 'Unlocking Services'],
            experience: '10 years',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4581, lng: 3.1618 },
            description: 'Professional mobile phone repair services with genuine parts.'
        },
        {
            id: 15,
            name: 'SmartPhone Clinic',
            address: '89 Balogun Market, Lagos Island, Lagos',
            phone: '+234 808 012 3456',
            email: 'smartphone.clinic@gmail.com',
            specialties: ['iPhone Repairs', 'Android Repairs', 'Tablet Repairs'],
            experience: '6 years',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4541, lng: 3.3947 },
            description: 'Specialized smartphone and tablet repair center in Lagos Island.'
        }
    ],
    'laptop-repairer': [
        {
            id: 16,
            name: 'CompuCare Lagos',
            address: '34 Computer Village, Ikeja, Lagos',
            phone: '+234 803 123 4567',
            email: 'compucare.lagos@gmail.com',
            specialties: ['Laptop Screen Repair', 'Keyboard Replacement', 'Virus Removal'],
            experience: '13 years',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
            coordinates: { lat: 6.6018, lng: 3.3515 },
            description: 'Professional laptop and computer repair services with certified technicians.'
        },
        {
            id: 17,
            name: 'Digital Solutions Center',
            address: '56 Allen Avenue, Ikeja, Lagos',
            phone: '+234 706 234 5678',
            email: 'digitalsolutions@outlook.com',
            specialties: ['Hardware Repair', 'Data Recovery', 'Software Installation'],
            experience: '11 years',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
            coordinates: { lat: 6.6018, lng: 3.3515 },
            description: 'Complete computer solutions including repairs, upgrades, and data recovery.'
        },
        {
            id: 18,
            name: 'Laptop Doctors Nigeria',
            address: '23 Admiralty Way, Lekki, Lagos',
            phone: '+234 809 345 6789',
            email: 'laptopdoctors@gmail.com',
            specialties: ['MacBook Repairs', 'Gaming Laptop Repairs', 'Business Laptop Service'],
            experience: '8 years',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
            coordinates: { lat: 6.4474, lng: 3.4539 },
            description: 'Specialized in high-end laptop repairs including MacBooks and gaming laptops.'
        }
    ]
};

// Category information
const categoryInfo = {
    'washing-machine': {
        title: 'Washing Machine Repairers',
        icon: 'fas fa-tshirt',
        description: 'Expert washing machine repair services'
    },
    'electrician': {
        title: 'Electricians',
        icon: 'fas fa-bolt',
        description: 'Professional electrical services'
    },
    'mechanic': {
        title: 'Mechanics',
        icon: 'fas fa-car',
        description: 'Auto repair and maintenance'
    },
    'plumber': {
        title: 'Plumbers',
        icon: 'fas fa-wrench',
        description: 'Plumbing and water system repairs'
    },
    'phone-repairer': {
        title: 'Phone Repairers',
        icon: 'fas fa-mobile-alt',
        description: 'Mobile phone repair specialists'
    },
    'laptop-repairer': {
        title: 'Laptop Repairers',
        icon: 'fas fa-laptop',
        description: 'Computer and laptop repair services'
    }
};
