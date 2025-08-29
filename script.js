//Basics - Variables, Conditionals
let userName = "Nellie";
let age = 20;

if (age >= 18) {
  document.getElementById("greeting").innerText =
    `Hello ${userName}, you are an adult ✅`;
} else {
  document.getElementById("greeting").innerText =
    `Hello ${userName}, you are a minor ❌`;
}

//Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(15, 3); // Example: 15 * 3
  document.getElementById("totalResult").innerText = `Total: $${total}`;
}

// Loops
let items = ["Apple", "Banana", "Grapes"];
let listContainer = document.getElementById("loopList");

for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  li.innerText = items[i];
  listContainer.appendChild(li);
}

//DOM Manipulation
//Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("dynamicText").innerText = "Text has changed!";
});

//Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", function () {
  document.body.classList.toggle("bg-toggle");
});

//Create element dynamically
let newElement = document.createElement("p");
newElement.innerText = "I was added with JavaScript ✨";
document.body.appendChild(newElement);
