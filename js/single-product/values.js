 function valuesFunc(){
    const valuesDOM = document.querySelectorAll(".values-list span")
    
    valuesDOM.forEach((size)=> {
        // size.classList.remove("active")
        size.addEventListener("click",()=> {
            valuesDOM.forEach((item)=>{
                item.classList.remove("active")
            })
            size.classList.add("active")
        })
    })
}
export default valuesFunc()
