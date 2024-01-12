// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newListItemEnd = document.createElement("li");
// Create text node
const listItemContent = document.createTextNode("Kombucha");
// Add text node to element
newListItemEnd.appendChild(listItemContent);
// Add element end of list
groceryList.appendChild(newListItemEnd);

// ADD NEW ITEM START OF LIST
// Create element
const newListItemStart = document.createElement("li");
// Create text node
const listItemContentStart = document.createTextNode("White Mangoes")
// Add text node to element
newListItemStart.appendChild(listItemContentStart)
// Add element to list
groceryList.insertBefore(newListItemStart, groceryList.firstChild);


// All <li> elements
var allListedItems = groceryList.getElementsByTagName("li");
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
    for(var i = 0; i < allListedItems; i++)
        {
            allListedItems[i].classList.add("cool");
        }
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var heading = document.querySelector("h2");
// h2 text
// No. of <li> elements
var itemCounter = allListedItems.length;
// Content
var contentHeading = "Buy Groceries (" + itemCounter + " items)";
// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = contentHeading;