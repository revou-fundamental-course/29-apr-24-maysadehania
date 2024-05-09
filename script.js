
const slider = document.getElementById("testi-slider");
const images = slider.querySelectorAll(".img-testi");

let currentIndex = 0;
const intervalTime = 3000; 

function nextSlide() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
}

let interval = setInterval(nextSlide, intervalTime);


slider.addEventListener("mouseenter", function() {
    clearInterval(interval);
});


slider.addEventListener("mouseleave", function() {
    interval = setInterval(nextSlide, intervalTime);
});

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var interest = document.getElementById("interest").value;

    if (name.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your email address");
        return false;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (interest.trim() === "") {
        alert("Please select your interest");
        return false;
    }

    return true;
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('send').addEventListener('click', () => validation());

