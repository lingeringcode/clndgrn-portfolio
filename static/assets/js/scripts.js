// Wait for document to completely load
document.addEventListener(
  "DOMContentLoaded",
  function () {
    
    // When the user scrolls down 160px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      // console.log(window.scrollY);
      if (window.scrollY > 160) {
        document.querySelector(".page-header").classList.add("scrolled");
      }
      if (window.scrollY < 70) {
        document.querySelector(".page-header").classList.remove("scrolled");
      }
    }
  }
)
