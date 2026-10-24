// ================== SELECT ELEMENTS ==================
const weightInput = document.querySelector('.firstinputfield');
const heightInput = document.querySelector('.secondinputfield');
const calculateBtn = document.querySelector('.button');
const bmiRange = document.querySelector('.lower');
const subresult = document.querySelector('.subresult');
const bmiValueEl = document.getElementById('bmiValue');
const bmiStatusEl = document.getElementById('bmiStatus');

// ================== BUTTON CLICK ==================
calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;

    // validation
    if (!weight || !height || weight <= 0 || height <= 0) {
        bmiValueEl.textContent = "Error";
        bmiStatusEl.textContent = "❌ Please enter valid values!";
        subresult.style.borderColor = "#ff4d4d";
        bmiRange.value = 0;
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    showResult(bmi);
});

// ================== SHOW RESULT ==================
function showResult(bmi) {
    let status = "";
    let statusColor = "";
    let gradient = "";

    if (bmi < 18.5) {
        status = "Underweight 😕 (Thin)";
        statusColor = "#ff9f43";
        gradient = "linear-gradient(to right, #ff9f43, #feca57)";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal ✅ (Fit & Healthy)";
        statusColor = "#1dd1a1";
        gradient = "linear-gradient(to right, #10ac84, #1dd1a1)";
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight ⚠️ (A bit high)";
        statusColor = "#ff6b6b";
        gradient = "linear-gradient(to right, #ff6b6b, #ee5253)";
    }
    else {
        status = "Obese 🚨 (High Risk)";
        statusColor = "#ee5253";
        gradient = "linear-gradient(to right, #c0392b, #e74c3c)";
    }

    // Update Text
    bmiValueEl.textContent = `BMI: ${bmi}`;
    bmiStatusEl.textContent = status;
    bmiStatusEl.style.color = statusColor;
    
    subresult.style.borderColor = statusColor;

    // Slider update
    let sliderVal = Math.min(Math.max(bmi, 0), 40);
    bmiRange.value = sliderVal;
    bmiRange.style.background = gradient;
}