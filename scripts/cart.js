export{cart};


let cart = [];

export const addToCart = (productNAME)=>{
  
      let matched; //an empty value for matched items.
      cart.forEach((cartItem)=>{
        if (productNAME === cartItem.productName){ //if the new selceted item is equal to old selected item...
          matched = cartItem; //... then it is assigned matched since they are matched. 
        }
      });
    
    
      const quantitySelector = document.querySelector(`.quantity-select-js-${productNAME}`); //line 92 and 93 is to extract value form select option and assign the val at which the cart increases on clicking addToCart.
      const quantity = Number(quantitySelector.value);
    
      if(matched){
        matched.quantity += quantity; //recall that matched is the name for the object i.e matched.productName.
      }else {
        cart.push({
          productName: productNAME, //you can change the name behind every product to Id if you ever get confused.. or to avoid naming conflict for same product from different brands.
          quantity: quantity
        });
      }
    };