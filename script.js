// Image Carousel Functionality
let index = 0;

function showNextImage() {
    const images = document.querySelectorAll(".carousel img");
    
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });

    index = (index + 1) % images.length; // Move to the next image
}

setInterval(showNextImage, 3000); // Auto-scroll every 3 seconds

document.addEventListener("DOMContentLoaded", showNextImage);

// Razorpay Payment Integration
document.getElementById("buyNow").addEventListener("click", function () {
    var options = {
        "key": "rzp_live_HGsIkG38t73zV5", // Replace with your Razorpay Key ID
        "amount": 18000, // Amount in paise (18000 paise = ₹180)
        "currency": "INR",
        "name": "Your Store Name",
        "description": "Purchase Digital Product",
        "image": "images/logo.png", // Your logo (optional)
        "handler": function (response) {
            alert("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
            document.getElementById("downloadPdf").style.display = "block"; // Show the download button
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#28a745"
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
});
