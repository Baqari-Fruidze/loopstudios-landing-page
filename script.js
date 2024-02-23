const burgerMenu = document.querySelector(".hamburger-button");
const navigation = document.querySelector(".burger-div");
const close = document.querySelector(".burger-close-button");
burgerMenu.addEventListener("click", () => {
  navigation.classList.add("navActive");
});
close.addEventListener("click", () => {
  navigation.classList.remove("navActive");
});
