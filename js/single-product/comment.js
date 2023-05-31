let starId = "";

const stars = document.querySelectorAll(".star");
const commentReviewsFunc = function () {
  stars.forEach((star) => {
    star.addEventListener("click", function (e) {
      e.preventDefault();
      starId = Number(star.dataset.id);
      //  console.log(starId);

      stars.forEach((item) => {
        item.classList.remove("active");
      });
      star.classList.add("active");
    });
  });
};

let comments = localStorage.getItem("reviews")
  ? JSON.parse(localStorage.getItem("reviews"))
  : [];
let commentListDOM = document.querySelector(".comment-list");
let commentBtnDOM = document.querySelector(".form-submit input");

const showReviews = () => {
  let results = "";
  comments.forEach((item) => {
    results += `
        <li class="comment-item">
                            <div class="comment-avatar">
                                <img src="./img/avatars/avatar2.jpg" alt="">
                            </div>
                      <div class="comment-text">
                        <ul class="comment-star">
                        ${counStar(item.star)}
                       
                        </ul>
                        <div class="comment-meta">
                          <strong>${item.author}</strong>
                          <span>-</span>
                          <time>April 23, 2022</time>

                        </div>
                        <div class="comment-description">
                          <p>${item.text}</p>
                        </div>
                      </div>
                    </li>
        `;
  });
  commentListDOM.innerHTML = results;

};
showReviews();


const addNewCommentFunc = () => {
  let commentTextDOM = document.getElementById("comment-text");
  let commentNameDOM = document.getElementById("comment-name");

  let commentText = "";
  let commentName = "";

  commentTextDOM.addEventListener("input", function (e) {
    commentText = e.target.value;
  });
  commentNameDOM.addEventListener("input", function (e) {
    commentName = e.target.value;
  });

  function addComment(e) {
    e.preventDefault();

    if (commentText && commentName && starId) {
      comments.push({ text: commentText, author: commentName, star: starId });
      localStorage.setItem("reviews", JSON.stringify(comments));

      showTotalRev()
    }
    let result = "";

    comments.forEach((item) => {
      result += `
        <li class="comment-item">
                            <div class="comment-avatar">
                                <img src="./img/avatars/avatar2.jpg" alt="">
                            </div>
                      <div class="comment-text">
                        <ul class="comment-star">

                        ${counStar(item.star)}
                         
                       
                        </ul>
                        <div class="comment-meta">
                          <strong>${item.author}</strong>
                          <span>-</span>
                          <time>April 23, 2022</time>

                        </div>
                        <div class="comment-description">
                          <p>${item.text}</p>
                        </div>
                      </div>
                    </li>
        `;
    });

    commentListDOM.innerHTML = result;
    commentTextDOM.value = "";
    commentNameDOM.value = "";
    starId = "";

    
    stars.forEach((star) => {
      
      star.classList.remove("active");  
      
    });
  }

  commentBtnDOM.addEventListener("click", addComment);
};

function commentsFunc() {
  commentReviewsFunc();
  addNewCommentFunc();
}
export default commentsFunc();

function counStar(star) {
  let starDom;

  if (star === 1) {
    starDom = `<li><i class="bi bi-star-fill"></i></li> `;
  }
  if (star === 2) {
    starDom = `<li><i class="bi bi-star-fill"></i></li> <li><i class="bi bi-star-fill"></i></li>`;
  }
  if (star === 3) {
    starDom = `<li><i class="bi bi-star-fill"></i></li> <li><i class="bi bi-star-fill"></i></li><li><i class="bi bi-star-fill"></i></li>`;
  }
  if (star === 4) {
    starDom = `<li><i class="bi bi-star-fill"></i></li> <li><i class="bi bi-star-fill"></i></li><li><i class="bi bi-star-fill"></i></li> <li><i class="bi bi-star-fill"></i></li>`;
  }
  if (star === 5) {
    starDom = `<li><i class="bi bi-star-fill"></i></li> <li><i class="bi bi-star-fill"></i></li><li><i class="bi bi-star-fill"></i></li> <li><i class="bi bi-star-fill"></i></li><li><i class="bi bi-star-fill"></i></li>`;
  }

  return starDom;
}



const productRev = document.querySelector(".product-review span")

function showTotalRev(){
 let comments = localStorage.getItem("reviews")
  ? JSON.parse(localStorage.getItem("reviews"))
  : [];


  revLogic(comments.length)

}

showTotalRev()






function revLogic(totalrev){

 
if(totalrev === 0){
  productRev.innerHTML = `No Reviews To Display `
}
else if(totalrev === 1){
  productRev.innerHTML= `${totalrev} review `
}
else{
  productRev.innerHTML = `${totalrev} reviews `
}

}