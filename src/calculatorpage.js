document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmiForm');
    const calorieForm = document.getElementById('calorieForm');

    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const bmi = calculateBMI(height, weight);
        const bmiCategory = getBMICategory(bmi);
        document.getElementById('bmiResult').innerHTML = `
            <p>Your BMI is: <strong>${bmi.toFixed(1)}</strong></p>
            <p>Category: <strong>${bmiCategory}</strong></p>
        `;
    });

    calorieForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const height = parseFloat(document.getElementById('calorieHeight').value);
        const weight = parseFloat(document.getElementById('calorieWeight').value);
        const activity = parseFloat(document.getElementById('activity').value);
        const calories = calculateCalories(age, gender, height, weight, activity);
        document.getElementById('calorieResult').innerHTML = `
            <p>Your estimated daily calorie needs: <strong>${calories.toFixed(0)} calories</strong></p>
        `;
    });

    function calculateBMI(height, weight) {
        return weight / ((height / 100) ** 2);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal weight';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    }

    function calculateCalories(age, gender, height, weight, activity) {
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        return bmr * activity;
    }
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
