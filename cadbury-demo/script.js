const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const type = button.dataset.type;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    products.forEach(function (product) {
      if (type === "all" || product.dataset.type === type) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

const search = document.getElementById("search");
const recipes = document.querySelectorAll(".recipe");
const empty = document.getElementById("empty");

search.addEventListener("input", function () {
  const word = search.value.toLowerCase();
  let count = 0;

  recipes.forEach(function (recipe) {
    if (recipe.dataset.name.includes(word)) {
      recipe.style.display = "block";
      count++;
    } else {
      recipe.style.display = "none";
    }
  });

  empty.style.display = count === 0 ? "block" : "none";
});

const giftBtn = document.getElementById("giftBtn");
const occasion = document.getElementById("occasion");
const giftTitle = document.getElementById("giftTitle");
const giftText = document.getElementById("giftText");

giftBtn.addEventListener("click", function () {
  if (occasion.value === "birthday") {
    giftTitle.textContent = "Birthday Treat Box";
    giftText.textContent = "Add a chocolate bar, share bag and cheerful note.";
  }

  if (occasion.value === "thanks") {
    giftTitle.textContent = "Thank You Gift";
    giftText.textContent = "Pick a smooth chocolate bar and write a kind note.";
  }

  if (occasion.value === "party") {
    giftTitle.textContent = "Celebration Hamper";
    giftText.textContent = "Choose sharing treats for friends and family.";
  }
});
