document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "product1", price: 19.99 },
    { id: 2, name: "product2", price: 39.99 },
    { id: 3, name: "product3", price: 59.999 },
  ];

  const cart = [];

  const productlistdisplay = document.getElementById("product-list");
  const cartitems = document.getElementById("cart-items");
  const emptycartdisplay = document.getElementById("empty-cart");
  const carttotaldisplay = document.getElementById("cart-total");
  const totalpricedisplay = document.getElementById("total-price");
  const checkoutbtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productdiv = document.createElement("div");
    productdiv.classList.add("product");
    productdiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(
      2
    )}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productlistdisplay.appendChild(productdiv);
  });
  productlistdisplay.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productid = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productid);
      cart.push(product);
      console.log(cart);
      rendercart();
    }
  });
  function rendercart() {
    cartitems.innerHTML = "";
    let totalPrice = 0;
    if (cart.length) {
      emptycartdisplay.classList.add("hidden");
      carttotaldisplay.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartitem = document.createElement("div");
        cartitem.innerHTML = `
          ${item.name}-$${item.price.toFixed(2)}`;
        cartitems.appendChild(cartitem);
        totalpricedisplay.textContent = `$${totalPrice.toFixed(2)}`;
      });
    } else {
      emptycartdisplay.classList.remove("hidden");
    }
  }
  checkoutbtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successfully");
    totalpricedisplay.textContent = `$0.00`;
    rendercart()
  });
});
