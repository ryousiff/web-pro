function validateSubscriptionForm() {
    var subscriberFirstName = document.getElementById('firstName').value;
    var subscriberLastName = document.getElementById('lastName').value;
    var subscriberEmail = document.getElementById('form-email').value;
    var subscriberMobileNo = document.getElementById('mobileNo').value;

    if (subscriberFirstName.length < 3 || subscriberLastName.length < 3) {
        alert("First Name and Last Name should have at least 3 characters.");
        return false; 
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(subscriberEmail)) {
        alert("Please check your email address.");
        return false; 
    }

    if (subscriberMobileNo.length != 8) {
        alert("Make sure you entered a valid phone number.");
        return false; 
    }

    localStorage.setItem('subscriberFirstName', subscriberFirstName);
    localStorage.setItem('subscriberLastName', subscriberLastName);

    
    displayGreeting(subscriberFirstName, subscriberLastName);

    alert("You have been successfully registered!");
    
    return true; 
}

function displayGreeting(firstName, lastName) {
    var greetingMsg = "Hey, " + firstName + " " + lastName + " !";
    document.getElementById('welcome_avatar').style.display = "block"
    document.getElementById('welcome').innerText = greetingMsg;
    document.getElementById('welcome').style.opacity = 1;
}

function loadSubscriberName() {
    var storedFirstName = localStorage.getItem('subscriberFirstName');
    var storedLastName = localStorage.getItem('subscriberLastName');
    if (storedFirstName && storedLastName) {
        displayGreeting(storedFirstName, storedLastName);
    }
}

function scrollToShoes() {
    document.querySelector('.shoes__section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

window.onload = loadSubscriberName;
