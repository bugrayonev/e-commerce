
    // ! slider start
//  buttonlara tıklamadan 5 saniyede resimler akacak

setInterval(()=> {
    showSlides(slideIndex += 1)
    },4000)
    
    
    let slideIndex = 1
    
    showSlides(slideIndex)
    
    function plusSlide(n){
      // buttonların içinde onclick var , // <button onclick="plusSlide(-1)">
      
      showSlides((slideIndex += n))
    }
    
    function currentSlide(n){
      showSlides(slideIndex = n) // dot buttonlarda onclik var
    }
    
    // const falan = [...slides].forEach( (slide) => {
      //   console.log(slide);
      // })
      
      // Array.from(slides).forEach((slide) => {
        //   console.log(slide);
        // })
        
            
        function showSlides(n){
          const slides = document.getElementsByClassName("slider-item")
          const dots = document.getElementsByClassName("slider-dot")
    
          if(n > slides.length ){
            slideIndex = 1
          }
          if(n < 1){
            slideIndex = slides.length
          }
          
          for(let i = 0 ; i < slides.length ; i++){  // resimler gözükmeyecek
            slides[i].style.display = "none"
          }
    
          for(let i = 0 ; i < dots.length ; i++){
            dots[i].className = dots[i].className.replace(" active"  , "") // dotların active ni sildik 
          }
    
          slides[slideIndex -1].style.display = "flex"
          dots[slideIndex - 1].className += " active" // mevcut dotu active yaptık (yani active clasını diğer clasın yanına eklemiş olduk)
    
        }
        
    
    
        
    
    
    // ! slider end
    
