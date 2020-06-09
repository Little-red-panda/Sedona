let button = document.querySelector(".button-search");
let popup = document.querySelector(".modal-search-hotels");
let minusAdult = document.querySelector(".minus-adult");
let plusAdult = document.querySelector(".plus-adult");
let minusChild = document.querySelector(".minus-child");
let plusChild = document.querySelector(".plus-child");
let adultInput = document.querySelector(".adult-input");
let childInput = document.querySelector(".child-input");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-hidden");
});

plusAdult.addEventListener("click", function() {
    adultInput.value++;
});

minusAdult.addEventListener("click", function() {
    adultInput.value--;
});

plusChild.addEventListener("click", function() {
    childInput.value++;
});

minusChild.addEventListener("click", function() {
    childInput.value--;
});

