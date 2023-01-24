function solve() {

   let productEl = document.querySelectorAll('.product');
   let outputElement = document.querySelector('textarea');
   let checkoutEl = document.querySelector('.checkout');
   let buttonsEl = document.querySelectorAll('.add-product');
   let totalPrice = 0;
   const shoppingBag = [];

   function print(){
      outputElement.textContent += `You bought ${shoppingBag.join(', ')} for ${totalPrice.toFixed(2)}.`;
      buttonsEl.forEach(e => e.setAttribute('disabled', ''));
      checkoutEl.setAttribute('disabled', '');
   };

   for (let el of productEl) {
      el.addEventListener('click', (e) => {
         let item = e.currentTarget.children[1].children[0].textContent;
         let price = e.currentTarget.children[3].textContent;
         price = Number(price);
         outputElement.textContent += `Added ${item} for ${price.toFixed(2)} to the cart.\n`;
         totalPrice += price;
         if (!shoppingBag.includes(item)) {
            shoppingBag.push(item);
         }
      });
   }

   checkoutEl.addEventListener('click', print)
}