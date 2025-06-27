const output = document.getElementById("output");

fetch("./BasicJSON.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load JSON file");
    }
    return response.json();
  })
  .then(data => {
    output.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Age:</strong> ${data.age}</p>
      <p><strong>Country:</strong> ${data.country}</p>
    `;
  })
  .catch(error => {
    console.error("Error:", error);
    output.textContent = "Could not load person data.";
  });
