const validTypes = ["general", "knock-knock", "programming", "dad"];
const OPTION = document.getElementById("joke-type");
const jokeDisplay = document.getElementById("joke-display");

document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    jokeDisplay.textContent = ""; // پاک کردن متن قبلی

    if (OPTION.value === "") {
        jokeDisplay.textContent = "Please select a joke type.";
        return;
    }

    try {
        const response = await fetch(`https://official-joke-api.appspot.com/jokes/${OPTION.value}/random`);
        const data = await response.json();

        if (data.length === 0) {
            throw new Error("Didn't get any jokes");
        } else {
            const joke = data[0];
            jokeDisplay.textContent = `${joke.setup} — ${joke.punchline}`;
        }
    } catch (error) {
        jokeDisplay.textContent = "Oops! Something went wrong: " + error.message;
    }
});
