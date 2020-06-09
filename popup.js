let button = document.querySelector(".button-search");
let popup = document.querySelector(".modal-search-hotels");
let minusAdult = document.querySelector(".minus-adult");
let plusAdult = document.querySelector(".plus-adult");
let minusChild = document.querySelector(".minus-child");
let plusChild = document.querySelector(".plus-child");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-hidden");
});

// plusAdult.addEventListener("click", function() {

// });


