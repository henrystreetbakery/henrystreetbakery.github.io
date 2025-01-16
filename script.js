const products = [
  { id: 1, name: "Product A", price: "$10", image: "./products/product-a.png" },
  { id: 2, name: "Product B", price: "$10", image: "./products/product-b.png" },
  { id: 3, name: "Product C", price: "$10", image: "./products/product-c.png" },
];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productRow = document.createElement("div");
    productRow.className = "product";
    productRow.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
    productList.appendChild(productRow);
  });
}

document.addEventListener("DOMContentLoaded", displayProducts);