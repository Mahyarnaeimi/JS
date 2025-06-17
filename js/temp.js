const characters = ["Goku", "Chi-Chi","Vegeta", "Bulma", "Krillin", "Android 18", "Yamcha"];

const addIsCool = characters.map(name => name + " is cool");
const longNamedChars = characters.filter(name => name.length > 6);
const bulmasIndex = characters.findIndex(name => name === "Bulma");
const indexOfName = (nameToFind) => {
	return characters.findIndex(name => {
		return name === nameToFind
	});
}