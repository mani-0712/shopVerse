const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 79.99,
        oldPrice: 129.99,
        rating: 4.5,
        reviews: 250,
        image: "./images/Wireless Headphones.webp",
        description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
        stock: 45,
        discount: 38,
        isNew: false,
        isDeal: true,
        addedDate: new Date('2024-09-15')
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "electronics",
        price: 299.99,
        oldPrice: 399.99,
        rating: 4.8,
        reviews: 420,
        image: "./images/Smart Watch Pro.webp",
        description: "Advanced smartwatch with health tracking, GPS, and water resistance.",
        stock: 30,
        discount: 25,
        isNew: true,
        isDeal: true,
        addedDate: new Date('2024-10-05')
    },
    {
        id: 3,
        name: "Designer Handbag",
        category: "fashion",
        price: 149.99,
        oldPrice: 249.99,
        rating: 4.6,
        reviews: 180,
        image: "./images/Designer Handbag.webp",
        description: "Elegant leather handbag perfect for any occasion.",
        stock: 25,
        discount: 40,
        isNew: false,
        isDeal: true,
        addedDate: new Date('2024-08-20')
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "sports",
        price: 89.99,
        oldPrice: 139.99,
        rating: 4.7,
        reviews: 350,
        image: "./images/Running Shoes.webp",
        description: "Lightweight running shoes with superior cushioning and breathability.",
        stock: 60,
        discount: 36,
        isNew: false,
        isDeal: false,
        addedDate: new Date('2024-07-10')
    },
    {
        id: 5,
        name: "Coffee Maker Deluxe",
        category: "home",
        price: 129.99,
        oldPrice: 179.99,
        rating: 4.4,
        reviews: 290,
        image: "./images/Coffee Maker Deluxe.webp",
        description: "Programmable coffee maker with built-in grinder and thermal carafe.",
        stock: 35,
        discount: 28,
        isNew: true,
        isDeal: false,
        addedDate: new Date('2024-10-01')
    },
    {
        id: 6,
        name: "Laptop Stand Aluminum",
        category: "electronics",
        price: 49.99,
        oldPrice: 79.99,
        rating: 4.3,
        reviews: 150,
        image: "./images/Laptop Stand Aluminum.webp",
        description: "Ergonomic aluminum laptop stand with adjustable height.",
        stock: 50,
        discount: 38,
        isNew: false,
        isDeal: true,
        addedDate: new Date('2024-06-15')
    },
    {
        id: 7,
        name: "Casual T-Shirt",
        category: "fashion",
        price: 24.99,
        oldPrice: 39.99,
        rating: 4.2,
        reviews: 500,
        image: "./images/Casual T-Shirt.webp",
        description: "Comfortable cotton t-shirt available in multiple colors.",
        stock: 100,
        discount: 38,
        isNew: false,
        isDeal: false,
        addedDate: new Date('2024-05-20')
    },
    {
        id: 8,
        name: "Yoga Mat Premium",
        category: "sports",
        price: 39.99,
        oldPrice: 59.99,
        rating: 4.6,
        reviews: 220,
        image: "https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Non-slip yoga mat with extra cushioning and carrying strap.",
        stock: 75,
        discount: 33,
        isNew: true,
        isDeal: false,
        addedDate: new Date('2024-09-28')
    },
    {
        id: 9,
        name: "LED Desk Lamp",
        category: "home",
        price: 45.99,
        oldPrice: 69.99,
        rating: 4.5,
        reviews: 180,
        image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Modern LED desk lamp with touch controls and USB charging port.",
        stock: 40,
        discount: 34,
        isNew: true,
        isDeal: false,
        addedDate: new Date('2024-10-03')
    },
    {
        id: 10,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 59.99,
        oldPrice: 99.99,
        rating: 4.7,
        reviews: 380,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Portable Bluetooth speaker with 360-degree sound and 12-hour battery.",
        stock: 55,
        discount: 40,
        isNew: false,
        isDeal: true,
        addedDate: new Date('2024-08-10')
    },
    {
        id: 11,
        name: "Sunglasses Classic",
        category: "fashion",
        price: 69.99,
        oldPrice: 119.99,
        rating: 4.4,
        reviews: 210,
        image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Polarized sunglasses with UV protection and stylish design.",
        stock: 45,
        discount: 42,
        isNew: false,
        isDeal: true,
        addedDate: new Date('2024-07-25')
    },
    {
        id: 12,
        name: "Basketball Official",
        category: "sports",
        price: 34.99,
        oldPrice: 49.99,
        rating: 4.6,
        reviews: 160,
        image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=500",
        description: "Official size basketball with superior grip and durability.",
        stock: 70,
        discount: 30,
        isNew: true,
        isDeal: false,
        addedDate: new Date('2024-09-30')
    }
];

let cart = JSON.parse(localStorage.getItem('shopverse_cart')) || [];
let currentFilter = 'all';
let currentSort = 'default';
let lastViewedProducts = JSON.parse(localStorage.getItem('shopverse_lastviewed')) || [];

function initApp() {
    checkLoginStatus();
    loadTheme();
    renderProducts();
    renderTopDeals();
    renderNewArrivals();
    updateCartCount();
    setupEventListeners();
    showRecommendations();
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('shopverse_user'));
    if (user) {
        document.getElementById('userGreeting').textContent = user.name;
        document.getElementById('loginBtn').innerHTML = `<i class="fas fa-user"></i> ${user.name}`;
    }
}

function loadTheme() {
    const theme = localStorage.getItem('shopverse_theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('voiceSearchBtn').addEventListener('click', startVoiceSearch);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('loginBtn').addEventListener('click', openLogin);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);
    document.getElementById('backToTop').addEventListener('click', scrollToTop);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderProducts();
        });
    });

    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            currentFilter = category;
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            renderProducts();
        });
    });

    window.addEventListener('scroll', () => {
        const backToTopBtn = document.getElementById('backToTop');
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productsContainer = document.getElementById('productsContainer');

    if (searchTerm === '') {
        renderProducts();
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    renderFilteredProducts(filteredProducts);
}

function startVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Voice search is not supported in your browser.');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.continuous = false;

    const voiceBtn = document.getElementById('voiceSearchBtn');
    voiceBtn.innerHTML = '<i class="fas fa-microphone text-success"></i>';

    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('searchInput').value = transcript;
        handleSearch({ target: { value: transcript } });
        voiceBtn.innerHTML = '<i class="fas fa-microphone text-danger"></i>';
    };

    recognition.onerror = () => {
        voiceBtn.innerHTML = '<i class="fas fa-microphone text-danger"></i>';
        alert('Voice recognition error. Please try again.');
    };

    recognition.onend = () => {
        voiceBtn.innerHTML = '<i class="fas fa-microphone text-danger"></i>';
    };
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('shopverse_theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggle').innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

function renderProducts() {
    let filteredProducts = currentFilter === 'all'
        ? products
        : products.filter(p => p.category === currentFilter);

    filteredProducts = sortProducts(filteredProducts);
    renderFilteredProducts(filteredProducts);
}

function sortProducts(productsList) {
    const sorted = [...productsList];

    switch (currentSort) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.sort((a, b) => b.addedDate - a.addedDate);
        default:
            return sorted;
    }
}

function renderFilteredProducts(productsList) {
    const container = document.getElementById('productsContainer');

    if (productsList.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><h4>No products found</h4></div>';
        return;
    }

    container.innerHTML = productsList.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

function renderTopDeals() {
    const deals = products.filter(p => p.isDeal).slice(0, 4);
    const container = document.getElementById('topDealsContainer');
    container.innerHTML = deals.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

function renderNewArrivals() {
    const newProducts = products.filter(p => p.isNew).slice(0, 4);
    const container = document.getElementById('newArrivalsContainer');
    container.innerHTML = newProducts.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

function createProductCard(product) {
    const stars = generateStars(product.rating);
    return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card product-card fade-in" data-product-id="${product.id}">
                <div class="position-relative">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    ${product.discount ? `<span class="badge-discount">${product.discount}% OFF</span>` : ''}
                    ${product.isNew ? `<span class="badge-new">NEW</span>` : ''}
                </div>
                <div class="card-body">
                    <span class="badge bg-secondary mb-2">${capitalize(product.category)}</span>
                    <h5 class="card-title">${product.name}</h5>
                    <div class="rating mb-2">
                        ${stars}
                        <span class="text-muted ms-2">(${product.reviews})</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        ${product.oldPrice ? `<span class="product-old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <button class="btn btn-primary w-100 add-to-cart-btn" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star rating"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt rating"></i>';
    }
    for (let i = Math.ceil(rating); i < 5; i++) {
        stars += '<i class="far fa-star rating"></i>';
    }

    return stars;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function attachProductCardListeners() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn') && !e.target.closest('.add-to-cart-btn')) {
                const productId = parseInt(card.dataset.productId);
                openProductModal(productId);
            }
        });
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            addToCart(productId);
        });
    });
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    addToLastViewed(productId);

    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductCategory').textContent = capitalize(product.category);
    document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalProductRating').innerHTML = generateStars(product.rating);
    document.getElementById('modalProductReviews').textContent = `(${product.reviews} reviews)`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductStock').textContent = `${product.stock} in stock`;

    const modalAddToCartBtn = document.getElementById('modalAddToCart');
    modalAddToCartBtn.onclick = () => addToCart(productId);

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function addToLastViewed(productId) {
    lastViewedProducts = lastViewedProducts.filter(id => id !== productId);
    lastViewedProducts.unshift(productId);
    lastViewedProducts = lastViewedProducts.slice(0, 5);
    localStorage.setItem('shopverse_lastviewed', JSON.stringify(lastViewedProducts));
    showRecommendations();
}

function showRecommendations() {
    if (lastViewedProducts.length === 0) {
        document.getElementById('recommendationsSection').style.display = 'none';
        return;
    }

    const viewedProduct = products.find(p => p.id === lastViewedProducts[0]);
    if (!viewedProduct) return;

    const recommendations = products
        .filter(p => p.category === viewedProduct.category && p.id !== viewedProduct.id)
        .slice(0, 4);

    if (recommendations.length > 0) {
        document.getElementById('recommendationsSection').style.display = 'block';
        const container = document.getElementById('recommendationsContainer');
        container.innerHTML = recommendations.map(product => createProductCard(product)).join('');
        attachProductCardListeners();
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('shopverse_cart', JSON.stringify(cart));
    updateCartCount();
    showCartNotification();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = totalItems;
    cartCount.classList.add('cart-count-pulse');
    setTimeout(() => cartCount.classList.remove('cart-count-pulse'), 300);
}

function showCartNotification() {
    const Toast = bootstrap.Toast.getOrCreateInstance(document.createElement('div'));
    alert('Product added to cart!');
}

function openCart() {
    renderCart();
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
}

function renderCart() {
    const container = document.getElementById('cartItems');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h4>Your cart is empty</h4>
                <p class="text-muted">Add some products to get started!</p>
            </div>
        `;
        updateCartSummary();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-3">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="col-4">
                    <h6>${item.name}</h6>
                    <p class="text-primary mb-0">$${item.price.toFixed(2)}</p>
                </div>
                <div class="col-3">
                    <div class="quantity-control">
                        <button class="btn btn-sm btn-outline-primary" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="fw-bold">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-primary" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-2 text-end">
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    localStorage.setItem('shopverse_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('shopverse_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * 0.1;
    const total = subtotal - discount;

    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartDiscount').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const user = JSON.parse(localStorage.getItem('shopverse_user'));
    if (!user) {
        alert('Please login to proceed with checkout');
        const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
        cartModal.hide();
        openLogin();
        return;
    }

    alert(`Thank you for your order, ${user.name}! Your order total is $${document.getElementById('cartTotal').textContent}. Order confirmation will be sent to ${user.email}.`);

    cart = [];
    localStorage.setItem('shopverse_cart', JSON.stringify(cart));
    updateCartCount();

    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();
}

function openLogin() {
    const user = JSON.parse(localStorage.getItem('shopverse_user'));
    if (user) {
        const confirm = window.confirm(`You are logged in as ${user.name}. Do you want to logout?`);
        if (confirm) {
            localStorage.removeItem('shopverse_user');
            document.getElementById('userGreeting').textContent = 'Login';
            document.getElementById('loginBtn').innerHTML = '<i class="fas fa-user"></i> Login';
            location.reload();
        }
        return;
    }

    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

function handleLogin(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    const user = { name, email };
    localStorage.setItem('shopverse_user', JSON.stringify(user));

    document.getElementById('userGreeting').textContent = name;
    document.getElementById('loginBtn').innerHTML = `<i class="fas fa-user"></i> ${name}`;

    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();

    alert(`Welcome, ${name}!`);
    document.getElementById('loginForm').reset();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', initApp);
