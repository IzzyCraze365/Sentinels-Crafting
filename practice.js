// Sentinel Comics Issue #404: Lock Down
// Crafting Aid

//! Proof Practice

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector(
  "[data-user-template-container]"
);
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  console.log("Value", value);
  console.log("Users", users);
  user.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("http://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    user = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });

//Tutorial Help
// https://www.youtube.com/watch?v=TlP5WIxVirU
