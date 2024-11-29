// Function to calculate estimated delivery time based on package type
function calculateDeliveryTime(packageType) {
    let deliveryTime;

    // Use a switch statement to determine the delivery time
    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "Invalid package type. Please choose 'standard', 'express', or 'overnight'.";
    }

    // Print the estimated delivery time
    console.log(`Package Type: ${packageType}`);
    console.log(`Estimated Delivery Time: ${deliveryTime}`);
}

// Test the function with different package types
calculateDelivery
