// Navbar scroll efekti
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Classes sekmeleri
const classButtons = document.querySelectorAll(".classes-btn");
const classTabs = document.querySelectorAll(".tab-content");

classButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Buton aktifliği
        classButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Tab içeriklerini göster/gizle
        const tab = button.dataset.tab;
        classTabs.forEach(content => {
            content.classList.remove("active");
            if(content.dataset.tab === tab) content.classList.add("active");
        });
    });
});

// BMI Calculator
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiPointer = document.getElementById("bmi-pointer");

function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // cm -> m
    const weight = parseFloat(weightInput.value);
    if(height && weight) {
        const bmi = weight / (height * height);
        // BMI pointer pozisyonu (örnek olarak yüzde bazlı)
        const maxLeft = 220; // pointer max kayma px
        let left = (bmi / 40) * maxLeft;
        if(left > maxLeft) left = maxLeft;
        bmiPointer.style.left = left + "px";
        bmiPointer.title = "BMI: " + bmi.toFixed(2);
    }
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);

// Hamburger menü
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
