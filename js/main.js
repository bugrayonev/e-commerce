import headerFunc from "./header.js";

import productsFunc from "./products.js";

import searchFunc from "./search.js"

import mainData from "./data.js"



// ! add product to localStorage
//  (async function() {
//   const photos = await fetch("./js/data.json");
//   const data = await photos.json();
//   data ? localStorage.setItem("products", JSON.stringify(data)) : [];
//   console.log(data);
//    productsFunc(data) 
//   searchFunc(data)
// })();




  mainData ? localStorage.setItem("products", JSON.stringify(mainData)) : [];
  productsFunc(mainData);
  searchFunc(mainData);

// ! end of add product to localStorage



// ! cartItems to localStorage

const cartItems = document.querySelector(".header-cart-count")

cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0"
// ! end of cartItems to localStorage



// ! modal dialog start

const btnCloseDialog = document.querySelector(".modal-close")
const modalDialogDOM = document.querySelector(".modal-dialog")
const modalContentDOM = document.querySelector(".modal-content")




btnCloseDialog.addEventListener("click", ()=>{
  modalDialogDOM.classList.remove("show")
})


document.addEventListener("click",(e)=> {

if(!e.composedPath().includes(modalContentDOM)){
  modalDialogDOM.classList.remove("show")
}
})

/* 
// lüzümsuz çalışıyor
setTimeout(()=> {
          modalDialogDOM.classList.add("show")
      },3000) */









// let checkData = localStorage.getItem("checkbtn") ? JSON.parse(localStorage.getItem("checkbtn")) : []


// const checkboxDOM = document.querySelector(".modal-dialog form label input")

// checkboxDOM.addEventListener("click",(e)=>{
// const checkedBtn = e.target.checked
// localStorage.setItem("checkbtn",JSON.stringify(checkedBtn))
// })





// function checkControl(){
//   if(!checkData){

//     setTimeout(()=> {
//       modalDialogDOM.classList.add("show")
//     },3000)
      
//       }else{
//        modalDialogDOM.classList.remove("show")
//       }
// }
// checkControl()
  
  

// ! modal dialog end