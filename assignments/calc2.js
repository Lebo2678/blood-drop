let scientificDisplay = document.getElementById("scientific-display");
let programmerDisplay = document.getElementById("programmer-display");

function appendToDisplay(value) {
    // Check which calculator is active and update the respective display
    if (scientificDisplay === document.activeElement) {
        scientificDisplay.value += value;
    } else if (programmerDisplay === document.activeElement) {
        programmerDisplay.value += value;
    }
}

function clearDisplay() {
    scientificDisplay.value = '';
    programmerDisplay.value = '';
}

function calculateResult() {
    try {
        if (scientificDisplay === document.activeElement) {
            scientificDisplay.value = eval(scientificDisplay.value);
        } else if (programmerDisplay === document.activeElement) {
            programmerDisplay.value = eval(programmerDisplay.value); // Modify for specific programmer operations
        }
    } catch (e) {
        if (scientificDisplay === document.activeElement) {
            scientificDisplay.value = 'Error';
        } else if (programmerDisplay === document.activeElement) {
            programmerDisplay.value = 'Error';
        }
    }
}
