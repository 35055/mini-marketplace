const productList = document.querySelector(".products-list");

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const { id, title, price, image, quantity = 1 } = product;
    const findProduct = cart.find((item) => item.id === id);

    if (findProduct) {
        findProduct.quantity += 1;
    } else {
        cart.push({
            id,
            title,
            price,
            image,
            quantity
        })
    };

    localStorage.setItem("cart", JSON.stringify(cart));
}

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
    <img src="${product.image}" alt="${product.title}"/>
    <h3>${product.title}</h3>
    <p class="description">${product.description}</p>
    <div class="price">$${product.price}</div>
    <button class="card-button">Add to cart</button>
    `;

        const button = card.querySelector(".card-button");
        button.addEventListener("click", () => {
            addToCart(product)
        })

        productList.appendChild(card);
    })).catch((err) => {
        console.log(err);
        productList.innerHTML = "Failed to load products";
    })