
// JavaScript code to dynamically add items based on selected category
const menuList = document.getElementById('menu-list');
const itemList = document.getElementById('item-list');

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
}

menuList.addEventListener('click', function(event) {
    const selectedCategory = event.target.textContent;
    const items = {
        'All': [
            { name: 'Plain almond butter croissant', price: '$1.25' },
            { name: 'Chocolate croissant', price: '$1.75' },
            { name: 'Biryani', price: '$10.00' },
            { name: 'Pizza', price: '$8.50' },
            { name: 'Burger', price: '$6.75' },
            { name: 'Pasta', price: '$9.25' },
            { name: 'Cold Coffee', price: '$4.00' }
        ],
        'Biryani': [
            { name: 'Chicken Biryani', price: '$12.00' },
            { name: 'Vegetable Biryani', price: '$10.00' }
        ],
        'Pizza': [
            { name: 'Cheese Pizza', price: '$9.00' },
            { name: 'Pepperoni Pizza', price: '$11.00' }
        ],
        'Beverages': [
            { name: 'Lemonade', price: '$2.50' },
            { name: 'Cold Coffee', price: '$4.00' }
        ]
    };

    const selectedItems = items[selectedCategory] || items['All'];
    itemList.innerHTML = '';

    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price} <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>`;
        itemList.appendChild(li);
    });
});
