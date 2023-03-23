// Create a realtime age that shows the time passed since I got born i.e 16.9323
// years. The age should be updated every second.

// Create a function that returns the age in years
function getAge() {
    // Get the current date
    const now = new Date();
    // Get the date of my birth
    const birth = new Date(2006, 4, 18);
    // Calculate the difference in milliseconds
    const difference = now - birth;
    // Convert it to years
    const age = difference / 1000 / 60 / 60 / 24 / 365;
    // Return it
    return age;
    }

// Create a function that updates the age every second
function updateAge() {
    // Get the age element
    const ageElement = document.getElementById('age');
    // Update the age
    ageElement.innerText = getAge().toFixed(6);
    }

// Update the age every second
setInterval(updateAge, 1000);


// Display my GitHub public repositories in a card
// Username: Muffinaa

