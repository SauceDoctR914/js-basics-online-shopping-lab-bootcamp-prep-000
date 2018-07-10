var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(itemName) {
 cart.push({itemName,  itemPrice: Math.floor(Math.random() * 100)});
 return `${itemName} has been added to your cart.`;
}



function viewCart() {
   if (!cart.length) {
   return 'Your shopping cart is empty.';
   }
  let whole = `In your cart, you have`
   if (cart.length === 1) {
     return whole += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`;
   }
   let description = cart.reduce(function (whole, value, index) {
     if (index === cart.length - 1) {
        return whole += ` and ${value.itemName} at $${value.itemPrice}.`;
      } else if (index < cart.length - 2) {
        return whole += ` ${value.itemName} at $${value.itemPrice},`
        } else {
        return whole +=` ${value.itemName} at $${value.itemPrice},`;
   }
   }, whole
   ); 
   return description; 
}

 


function total(cart) {
  let newCart = [];
let thisCart = cart.map(function(itemPrice) {
  newCart.push(itemPrice)
});
  thisCart.reduce((a,b) => {
    return a + b;
  });
  return newCart;
}

function removeFromCart(toBeRemoved) {}  
  
function placeOrder(cardNumber){}
 
 
