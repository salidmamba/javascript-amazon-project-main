export{cart};


let cart = [
      {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1
      },
      {
            productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1
      }

];

export const addToCart = (productNAME)=>{
  
      let matched; //an empty value for matched items.
      cart.forEach((cartItem)=>{
        if (productId === cartItem.productId){ //if the new selceted item is equal to old selected item...
          matched = cartItem; //... then it is assigned matched since they are matched. 
        }
      });
    
    
      const quantitySelector = document.querySelector(`.quantity-select-js-${productNAME}`); //line 92 and 93 is to extract value form select option and assign the val at which the cart increases on clicking addToCart.
      const quantity = Number(quantitySelector.value);
    
      if(matched){
        matched.quantity += quantity; //recall that matched is the name for the object i.e matched.productName.
      }else {
        cart.push({
            productId: productId, //you can change the name behind every product to Id if you ever get confused.. or to avoid naming conflict for same product from different brands.
            quantity: quantity
        });
      }
    };