const list = document.getElementById("peopleList");

async function loadPeople() {
  try {
    const response = await fetch("people.json");

    if (!response.ok) {
      throw new Error("Failed to fetch JSON data");
    }

    const people = await response.json();

    people.forEach(person => {
      const li = document.createElement("li");
      li.textContent = `${person.name}, Age: ${person.age}, Country: ${person.country}`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading JSON:", error);
    list.innerHTML = "<li>Could not load data.</li>";
  }
}

loadPeople();
