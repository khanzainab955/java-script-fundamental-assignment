// Function to find matches for different character classes
function findCharacterClasses(inputString) {
    // Define regular expressions for character classes
    const patterns = {
        digits: /\d/g,                  // Matches any digit (0-9)
        uppercaseLetters: /[A-Z]/g,    // Matches uppercase letters
        lowercaseLetters: /[a-z]/g,    // Matches lowercase letters
        specialCharacters: /[^a-zA-Z0-9\s]/g // Matches special characters (excluding letters, digits, and whitespace)
    };

    // Find matches for each pattern
    const results = {
        digits: inputString.match(patterns.digits) || [],
        uppercaseLetters: inputString.match(patterns.uppercaseLetters) || [],
        lowercaseLetters: inputString.match(patterns.lowercaseLetters) || [],
        specialCharacters: inputString.match(patterns.specialCharacters) || []
    };

    return results;
}

// Test the function with a sample string
const testString = "Hello, World! 1234 @2024";

const matches = findCharacterClasses(testString);

// Display the results
console.log("Input String:", testString);
console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase");
