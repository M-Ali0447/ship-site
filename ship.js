 // Ma'lumotlar
        const fleetData = {
            "ships": [
                {
                    "id": 1,
                    "name": "Yacht Premium",
                    "type": "Luxury Yacht",
                    "capacity": 10,
                    "price": "500,000",
                    "icon": "🛥️",
                    "features": ["A/C", "Bar", "Musiqa", "Baliq ovlash"]
                },
                {
                    "id": 2,
                    "name": "Speed Boat",
                    "type": "Tezkema",
                    "capacity": 6,
                    "price": "300,000",
                    "icon": "🚤",
                    "features": ["Tez", "Qulay", "Ekstremal", "Foto-sessiya"]
                },
                {
                    "id": 3,
                    "name": "Family Boat",
                    "type": "Oila kemasi",
                    "capacity": 8,
                    "price": "400,000",
                    "icon": "⛵",
                    "features": ["Bolalar uchun", "Oshxona", "Hojatxona", "Kulgu"]
                }
            ],
            "pricing": [
                {
                    "type": "1 soatlik sayohat",
                    "price": "250,000 - 500,000",
                    "features": ["Dengiz havosi", "Foto-sessiya", "Sovuq ichimliklar"]
                },
                {
                    "type": "3 soatlik sayohat",
                    "price": "600,000 - 1,200,000",
                    "features": ["Qiziqarli hikoyalar", "Tarixiy joylar", "Nonushta"]
                },
                {
                    "type": "Kunlik ijarа",
                    "price": "1,500,000 - 3,000,000",
                    "features": ["Maxsus oshpaz", "Baliq ovlash", "Shoʻngʻish"]
                }
            ]
        };

        // Load fleet data
        function loadFleet() {
            const fleetContainer = document.getElementById('fleet-container');
            const shipSelect = document.getElementById('ship-select');
            
            fleetData.ships.forEach(ship => {
                // Kema kartalari
                const shipCard = document.createElement('div');
                shipCard.className = 'ship-card';
                shipCard.innerHTML = `
                    <div class="ship-icon">${ship.icon}</div>
                    <h3>${ship.name}</h3>
                    <p>${ship.type}</p>
                    <p>Sig'im: ${ship.capacity} kishi</p>
                    <p>Narx: ${ship.price} so'm / soat</p>
                    <p>${ship.features.join(', ')}</p>
                `;
                fleetContainer.appendChild(shipCard);

                // Select option
                const option = document.createElement('option');
                option.value = ship.id;
                option.textContent = `${ship.name} - ${ship.price} so'm/soat`;
                shipSelect.appendChild(option);
            });
        }

        // Load pricing data
        function loadPricing() {
            const pricingContainer = document.getElementById('pricing-cards');
            
            fleetData.pricing.forEach(price => {
                const priceCard = document.createElement('div');
                priceCard.className = 'price-card';
                priceCard.innerHTML = `
                    <h3>${price.type}</h3>
                    <div class="price-amount">${price.price}</div>
                    <p>${price.features.join(', ')}</p>
                `;
                pricingContainer.appendChild(priceCard);
            });
        }

        // Scroll to booking function
        function scrollToBooking() {
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        function showShips() {
            document.getElementById('fleet').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Form submission
        document.getElementById('booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Bron qilingan! Tez orada siz bilan bog\'lanamiz.');
            this.reset();
        });

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            loadFleet();
            loadPricing();
        });