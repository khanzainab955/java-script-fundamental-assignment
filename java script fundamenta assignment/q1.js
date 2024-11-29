// Define the outerFunction
function outerFunction(param) {
    // A variable declared inside outerFunction
    let outerVariable = "Outer Variable";

    // Define the inner function
    function innerFunction() {
        // Access the parameter of outerFunction and the outerVariable
        return `Parameter: ${param}, Outer Variable: ${outerVariable}`;
    }

    // Return the inner function
    return innerFunction;
}

// Create an instance of outerFunction and assign the returned inner function to a variable
const myInnerFunction = outerFunction("Hello");

// Call the inner function
console.log(myInnerFunction()); // Outputs: "Parameter: Hello, Outer Variable: Outer Variable"
