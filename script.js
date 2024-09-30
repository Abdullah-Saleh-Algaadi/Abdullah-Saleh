document.getElementById("submit-button").addEventListener("click", () => {
  const name = document.getElementById("name").value;

  // Store the name in localStorage
  localStorage.setItem("userName", name);

  // Redirect to page 2
  window.location.href = "page2.html";
});
