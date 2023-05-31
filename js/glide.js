
const productsContainer = document.getElementById("product-list");


    
const config = {
    // type: "carousel",  // resim tekrarı oluyor
    perView: 4,
    gap: 20,
    // autoplay: 3000,
    bound:true,


    breakpoints:{//    responsive yapı
        992:{
            perView: 3,
        },  
        768:{
            perView: 2,
        
    },
        576:{
            perView: 1,
        
    },
},

}



productsContainer && new Glide('.product-carousel',config ).mount();




const config2 = {
    // type: "carousel",
    perView: 4,
    gap: 20,
    // autoplay: 3000,
    bound: true,
   


    breakpoints:{//    responsive yapı
        992:{
            perView: 3,
        },  
        768:{
            perView: 2,
        
    },
        576:{
            perView: 1,
        
    },
},

}




productsContainer && new Glide('.product-carousel2',config2 ).mount();




export function singleThumbs(){
    
const config3 = {
    // type: "carousel",
    perView: 5,
    gap: 11,
    // autoplay: 3000,
    bound: true,
   


    breakpoints:{//    responsive yapı
        992:{
            perView: 3,
        },  
        768:{
            perView: 3,
        
    },
        576:{
            perView: 3,
        
    },
},

}




 new Glide('.product-thumb',config3 ).mount();
}



