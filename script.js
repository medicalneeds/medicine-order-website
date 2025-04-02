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

        let whatsappMessage = `New Order Received!\nName: ${name}\nContact: ${phone}\nMedicines: ${medicines}`;
        
        // Ensure WhatsApp opens in a new tab
        let whatsappURL = `https://wa.me/8185903453?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
    });
</script>
