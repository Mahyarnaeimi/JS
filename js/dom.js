console.log("=== dom.js is running ===");

// const theHeaderWeFound = document.getElementById("cool-header");
// console.log(theHeaderWeFound);

// const theThingQuerySelectorFound = document.querySelector("p");
// console.log(theThingQuerySelectorFound);

// const theThingsIFoundWithQSAll = document.querySelectorAll(".box");
// console.log(theThingsIFoundWithQSAll);

// theThingsIFoundWithQSAll.forEach(element => {
// 	console.log(element, window);
// }); 

// const theBoxesInAnHTMLCollection = document.getElementsByTagName("button");

// console.log(theBoxesInAnHTMLCollection);

// Array.from(theBoxesInAnHTMLCollection).forEach(element => {
// 	console.log(element);
// })

// const theContainerOfBoxes = document.getElementById("boxContainer1");

// console.log( theContainerOfBoxes, window.boxContainer1, boxContainer1);

// console.log(theContainerOfBoxes === boxContainer1);

// console.log(theContainerOfBoxes.children[2]);

// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

// const theBlueBox = document.querySelector(".blue");
// console.log(theBlueBox);

// theBlueBox.remove()

// console.log(theBlueBox);

const theButton = document.querySelector("button");

console.log(theButton);

// theButton.setAttribute("disabled", false) // this will not work as setAttribute converts second argument to a string

// theButton.setAttribute("type", "button")

theButton.type = "button";
// theButton.disabled = false;
// theButton["disabled"] = false;

// console.log(theButton.innerHTML, theButton.innerText, theButton.textContent);

// theButton.textContent = "Maybe I do something now?"

// theButton.innerText = "<strong>Hello</strong>";
// theButton.innerHTML = "<strong>Hello</strong>";

// const theMainElement = document.querySelector("main");

// console.log(theMainElement);

// theMainElement.innerText = "Did I do that?" // oops?

// theMainElement.innerHTML += "<p>Did I do that?</p>"

// const primaryHeading = document.querySelector("h1");

// console.log(primaryHeading, primaryHeading.style);

// primaryHeading.style.color = "purple";

// primaryHeading.style["background-color"] = "blue"; // works!
// primaryHeading.style.backgroundColor = "blue";

// const theTextSection = document.querySelector(".row.text");

// console.log(theTextSection, theTextSection.className, typeof theTextSection.className);

// // theTextSection.className += " nothing useful";

// // theTextSection.className += " col";

// theTextSection.classList.add("col");

// theTextSection.classList.remove("col");

// theTextSection.classList.remove("koijhugf");

// console.log(theTextSection.classList.contains("row"));
// console.log(theTextSection.classList.contains("col"));

// if (theTextSection.classList.contains("col")) {
// 	theTextSection.classList.remove("col");
// } else {
// 	theTextSection.classList.add("col");
// }