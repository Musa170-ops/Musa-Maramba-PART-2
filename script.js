window.onload = function() {
    alert("Welcome to CANSA. Together we can make a difference!");
};

/* REGISTRATION FORM */
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if(registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            
            let firstName = document.getElementById("fname").value;
            let lastName = document.getElementById("lname").value

            if(firstName.trim() === "") {
                alert("Please enter your first name");
                event.preventDefault();
            }
            else if(lastName.trim() === "") {
                alert("Please enter your last name.");
                event.preventDefault();
            }
            else {
                alert("Registration successful");
            }
        });
    }
});

/*  DONATION FORM */
document.addEventListener("DOMContentLoaded", function() {
    
    const donationForm = document.getElementById("donationForm");
    
    if(donationForm) {
        
        donationForm.addEventListener("submit", function(event) {
            
            let email = document.getElementById("email").value;
            let amount = document.getElementById("amount").value;
            let type = document.getElementById("donationType").value;

            if(!email.include("@")) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            }
            else if(amount <= 0) {
                alert("Please enter a valid donation amount.");
                event.preventDefault();
            }
            else if(type === "") {
                alert("Please select a donation type.");
                event.preventDefault();
            }
            else {
                alert("Thank you for supporting CANSA!");
            }
        });
    }
});

/* FOOTER YEAR */
document.getElementById("year").textContent =
new Date().getFullYear();

/* BACK-TO-TOP BUTTON */
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if(document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    }
    else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function() {

    window.scrollTo( {
        top: 0,
        behaviour: "smooth"
    });
};