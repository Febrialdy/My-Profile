const searchBox =  document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-btn-container")
const searchBtn = document.querySelector(".search-btn")
const closeBtn = document.querySelector(".close-btn")

searchBtn.addEventListener("click", () =>{
  searchBox.classList.add("active")
  navBtnContainer.classList.add("active")
})

closeBtn.addEventListener("click", () =>{
  searchBox.classList.remove("active")
  navBtnContainer.classList.remove("active")
})


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}