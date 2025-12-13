const productContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((products) => products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}"/>
        <h3>${product.title}</h3>
        <p class="description">${product.description}</p>
        <div class="price">$${product.price}</div>
        <button>Add to cart</button>
    `;

    productContainer.appendChild(card);
})).catch((err) => {
    console.log(err);
    productContainer.innerHTML = "Failed to load products";
})