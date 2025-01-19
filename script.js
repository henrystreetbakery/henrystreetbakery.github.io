const products = [
  { id: 1, name: "Ube rice krispies treat", price: "", image: "./products/product-ube-rice-krispies-treat.jpg" },
  { id: 2, name: "Salted coco jam rice krispies treat", price: "", image: "./products/product-salted-coco-jam-rice-krispies-treat.jpg" },
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