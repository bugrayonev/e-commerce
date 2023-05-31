


// let products =   JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")): []

 let cart =  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];


function addToCart(products){
    const cartItems = document.querySelector(".header-cart-count")

    const buttons = [...document.getElementsByClassName("add-to-cart")]
    buttons.forEach((button) => {
        const inCart =cart.find((item)=> item.id === Number(button.dataset.id))
       
       if(inCart){ //sepete ürün eklediysek o ürünü sepete ekleyemiyeceğiz
        button.setAttribute("disabled", "disabled")
        
       }
       else{
        button.addEventListener("click", function(e){
            e.preventDefault()
            // console.log(e.target.dataset.id);
            const id = e.target.dataset.id
            const findProduct = products.find(product => product.id === Number(id))
            cart.push({...findProduct, quantity:1})
          
            localStorage.setItem("cart", JSON.stringify(cart))
            button.setAttribute("disabled", "disabled")
            cartItems.innerHTML = cart.length // buranın render edilmeden çalışması için bu kodun main.js de de yazılması lazım
        })
       }

      
  
    })
}
function productRoute(){
  
  // let productId = []
  // const openSinglePage = document.getElementsByClassName("openSinglePage")
  const productLink = document.getElementsByClassName("product-link")
  Array.from(productLink).forEach((button)=> {
    button.addEventListener("click", function(e){
      e.preventDefault()
      const id = Number(e.target.dataset.id)
      localStorage.setItem("productId",JSON.stringify(id))
      window.location.href = "single-product.html"  //  singleproduct.html e sayfayı yönlendiriyoruz   
    })
  })




}

function productsFunc(products) {
   
  const productsContainer = document.getElementById("product-list");

  let results = "";
  products.forEach((item) => {
    
    results += `    
    <li class="product-item glide__slide">
    <div class="product-image">
      <a href="#">
        <img src=${item.img.singleImage} alt="" class="img1">
        <img src=${item.img.thumbs[1]} alt="" class="img2">
      </a>
    </div>
    <div class="product-info">
      <a href="$" class="product-title">${item.name}</a>
      <ul class="product-star">
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-half"></i>
        </li>
      </ul>
      <div class="product-prices">
        <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
        <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
      </div>
      <span class="product-discount">-${item.discount}%</span>
      <div class="product-links">
        <button >
          <i class="bi bi-basket-fill add-to-cart" data-id=${item.id}></i>
        </button>
        <button>
          <i class="bi bi-heart-fill"></i>
        </button>
        <a href="#" class = "openSinglePage" >
          <i class="bi bi-eye-fill product-link" data-id=${item.id}></i>
        </a>
        <a href="#"> 
          <i class="bi bi-share-fill"></i>
        </a>
      </div>
    </div>
  </li>


`;
   productsContainer  ? productsContainer.innerHTML = results : ""
    addToCart(products);
  });
  productRoute()
 
}

export default productsFunc;
