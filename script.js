document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let medicines = document.getElementById("medicines").value;

    document.getElementById("confirmation").innerHTML = 
        "Your order has been placed! We will contact you soon.";
    
    // Simulating order submission
    console.log("Order Details:");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Medicines:", medicines);
});
