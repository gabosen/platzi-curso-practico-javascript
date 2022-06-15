function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}

function onClickButtonPriceDiscount() {
   const inputPrice = document.getElementById("InputPrice");
   const priceValue = inputPrice.value;

   const inputDiscount = document.getElementById("InputDiscount");
   const Discountvalue = inputDiscount.value;

   const precioConDescuento = calcularPrecioConDescuento(priceValue,Discountvalue);
   
   const resultP = document.getElementById("ResultP");
   resultP.innerText = "El precio con descuento: $" + precioConDescuento;
}