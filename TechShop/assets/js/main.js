const products = [
    {
        id: 1,
        title: "Ноутбук Apple MacBook Pro 16",
        price: 99999,
        category: "laptops",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 2,
        title: "Смартфон Samsung Galaxy S24",
        price: 39999,
        category: "smartphones",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 3,
        title: "Навушники AirPods Pro 2",
        price: 9999,
        category: "headphones",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 4,
        title: "Монітор Samsung 27",
        price: 12999,
        category: "monitors",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 5,
        title: "Клавіатура Logitech",
        price: 2499,
        category: "keyboards",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 6,
        title: "Миша Logitech G102",
        price: 1499,
        category: "mice",
        image: "https://via.placeholder.com/300x200"
    }
];

const container = document.querySelector(".products-grid");


const htmlString = products
    .map((product) => {
        return `
            <article class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">${product.price} грн</p>
                <button class="btn btn-buy" data-id="${product.id}">
                    Купити
                </button>
            </article>
        `;
    })
    .join("");


container.innerHTML = htmlString;