<script>
    document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let medicines = document.getElementById("medicines").value;

        if (!name || !phone || !medicines) {
            alert("Please fill all required fields.");
            return;
        }

        let confirmationMessage = "Your order has been placed! We will contact you soon.";
        document.getElementById("confirmation").innerText = confirmationMessage;

        let whatsappMessage = `New Order Received!%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(phone)}%0AMedicines: ${encodeURIComponent(medicines)}`;

        // Ensure WhatsApp opens correctly
        let whatsappURL = `https://wa.me/8185903453?text=${whatsappMessage}`;
        window.location.href = whatsappURL;
    });
</script>
