// GET THE BUTTON
const button = document.querySelector('#generate-button');

// GENERATE A RANDOM NUMBER FUNCTION
// I made a function for a random number that can be used in other functions
// Defaut min = 1, max = 90
function generateRandomNumber(min = 1, max = 90) {
  return Math.floor(Math.random() * max) + min;
}

// CREATE UNIQUE IDS FUNCTION
function createUniqueIds(e) {
  e.stopPropagation();

  // Get the <p>
  const uniqueIds = document.querySelector('#unique-ids');
  
  // Create an array with 6 empty elements
  let ids = Array(6);
  let n;

  // For loop that iterates up to the length of the array (6 times)
  for (let i = 0; i < ids.length; i++) {
    do {
      n = generateRandomNumber();
    } while (ids.includes(n));

    ids[i] = n;
  }

  // Sort and join the array
  let numString = ids.sort((a, b) => a - b).join(' - ');
  
  // Update the text inside of the <p>
  uniqueIds.textContent = numString;
}

// CLICK EVENT
// When the button is clicked, createUniqueIds() is executed
button.addEventListener('click', createUniqueIds, false);