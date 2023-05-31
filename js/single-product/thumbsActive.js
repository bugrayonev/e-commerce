export function thumbsActiveFunc() {
  const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid");
  const singleImage = document.querySelector("#single-image");

  thumbs.forEach((item) => {
    item.classList.remove("active");

    item.addEventListener("click", function () {
      thumbs.forEach((image) => {
        image.classList.remove("active");
      });
      singleImage.src = item.src;       // seçtiğimiz thumbsnails resimler büyük üst tarafta gözukecek

      item.classList.add("active");
    });
  });
}
