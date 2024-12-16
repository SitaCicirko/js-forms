const form = document.querySelector("form");
const outputDiv = document.querySelector("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  outputDiv.textContent = "";
  for (const [key, value] of formData.entries()) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${key}: ${value}`;
    outputDiv.appendChild(paragraph);
  }
});
