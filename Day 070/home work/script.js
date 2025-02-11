// 1. Select by ID
const mainDiv = document.getElementById("main-div");
console.log(mainDiv); // Output: <div id="main-div">Main Div</div>

// 2. Select by class (first match)
const firstParagraph = document.querySelector(".text");
console.log(firstParagraph); // Output: <p class="text">First Paragraph</p>

// 3. Select all by class (NodeList of all matches)
const allParagraphs = document.querySelectorAll(".text");
allParagraphs.forEach(paragraph => console.log(paragraph));

// 4. Select by tag name (first match)
const button = document.querySelector("button");
console.log(button); // Output: <button id="btn">Click Me</button>

// 5. Select all by tag name (HTMLCollection)
const listItems = document.getElementsByTagName("li");
for (const item of listItems) {
  console.log(item); // Outputs: <li>Item 1</li>, <li>Item 2</li>
}

// 6. Use event listener on a selected element
button.addEventListener("click", () => {
  alert("Button Clicked!");
});
