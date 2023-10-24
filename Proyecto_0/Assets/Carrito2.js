const productL = document.getElementById("product-list");
const Carta = document.getElementById("cart-items");
const Total = document.getElementById("cart-total");

productL.addEventListener("click", function(event){
    if (event.tarjet && event.tarjet.className==="adicinar-carta"){
        const product = event.tarjet.parentNode;
        const Nameproducto = product.dataset.name
        const precio = parseFloat(product.dataset.price);

        const CartaItem = document.createElement("li");
        CartaItem.textContent = `${Nameproducto} - $${precio}`;

        Carta.appendChild(CartaItem)
    }
})






