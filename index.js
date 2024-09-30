const products = [
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$199.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool1",
    price: "$29.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$39.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$49.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$59.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$69.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$19.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool1",
    price: "$29.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$39.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$49.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$59.99",
    description: "A cool t-shirt for casual wear.",
  },
  {
    image: "Image/ima1.jpg.JPG",
    name: "Cool T-Shirt",
    price: "$69.99",
    description: "A cool t-shirt for casual wear.",
  },
];

const productContainer = document.getElementById("product-container");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p class="price">${product.price}</p>
        <p>${product.description}</p>
    `;
  // Event listener for opening the modal
  card.addEventListener("click", () => {
    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-name").textContent = product.name;
    document.getElementById("modal-price").textContent = product.price;
    document.getElementById("modal-description").textContent =
      product.description;
    modal.style.display = "block";
  });
  productContainer.appendChild(card);
});

// Event listener for closing the modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//Log in form

// document.getElementById("search-button").addEventListener("click", function () {
//   const query = document.getElementById("search-input").value.toLowerCase();
//   const results = products.filter(
//     (product) => product.name.toLowerCase() === query // Exact match
//   );

//   displayResults(results);
// });

// function displayResults(results) {
//   const resultsContainer = document.getElementById("product-container");

//   // Hide all product cards
//   const allCards = resultsContainer.querySelectorAll(".product-card");
//   allCards.forEach((card) => {
//     card.style.display = "none"; // Hide all cards
//   });

//   // Check if there are results to display
//   if (results.length === 0) {
//     resultsContainer.innerHTML = "<p>No results found</p>";
//     return;
//   }

//   // Show only the matching product cards
//   results.forEach((product) => {
//     const matchingCard = [...allCards].find(
//       (card) => card.querySelector("h2").textContent === product.name
//     );
//     if (matchingCard) {
//       matchingCard.style.display = "block"; // Show matching card
//     }
//   });
// }
