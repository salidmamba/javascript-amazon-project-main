// const products = [{
//         image:"images/products/athletic-cotton-socks-6-pairs.jpg",
//         name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
//         rating:{rate:4.5, count:87},
//         priceCents:1090
// },
// {
//         image:"images/products/intermediate-composite-basketball.jpg",
//         name:"Intermediate Size Basketball",
//         rating:{
//           rate:4.0,//in the main data file.. rate was named as stars so remember to make changes in the html bellow.
//           count:127
//         },
//         priceCents:2095
// },
// {
//         image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name:"Adults Plain Cotton T-Shirt - 2 Pack",
//         rating:{
//           rate:4.5,
//           count:56
//         },
//         priceCents:799
// }]

let productHtml = "";

products.forEach((items)=>{
        productHtml +=`<div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src=${items.image}>
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${items.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${(items.rating.stars) * 10}.png">
          <div class="product-rating-count link-primary">
            ${items.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(items.priceCents)/100}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary cart-js" data-product-id="${items.id}">
          Add to Cart
        </button>
      </div>`;
});
document.querySelector(".grid-html").innerHTML = productHtml;

document.querySelectorAll(".cart-js").forEach((button)=>{
  button.addEventListener('click', ()=>{
    const productNAME = button.dataset.productId; //the productId ( or productName )here is gotten from data-product-id ( or data-product-name) and it was renamed by the program after running.
   
    let matched; //an empty value for matched items.
    cart.forEach((item)=>{
      if (productNAME === item.productName){ //if the new selceted item is equal to old selected item...
        matched = item; //... then it is assigned matched since they are matched. 
      }
    })

    if(matched){
      matched.quantity += 1; //recall that matched is the name for the object i.e matched.productName.
    }else {
      cart.push({
        productName: productNAME, //you can change the name behind every product if you ever get confused..
        quantity: 1
      });
    }
    

    let totalQuantity = 0;
    cart.forEach((item)=>{
      totalQuantity += item.quantity;
    });

    document.querySelector('.cart-quantity-js').innerHTML = totalQuantity;

    console.log(`Total selected itmes is ${totalQuantity}`);
    console.log(cart);
  })
});


