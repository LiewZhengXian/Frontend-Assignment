document.addEventListener('DOMContentLoaded', function() {
    //Forms
    const bmiForm = document.getElementById('bmiForm');
    const calorieForm = document.getElementById('calorieForm');
    const macroForm = document.getElementById('macroForm');

    const formFields = [
        { sessionKey: 'height', elementId: 'height' },
        { sessionKey: 'weight', elementId: 'weight' },
        { sessionKey: 'age', elementId: 'age' },
        { sessionKey: 'gender', elementId: 'gender'},
        { sessionKey: 'macroAge', elementId: 'macroAge' },
        { sessionKey: 'calorieHeight', elementId: 'calorieHeight' },
        { sessionKey: 'calorieWeight', elementId: 'calorieWeight' },
        { sessionKey: 'activity', elementId: 'activity' },
        { sessionKey: 'macroGender', elementId: 'macroGender'},
        { sessionKey: 'macroHeight', elementId: 'macroHeight' },
        { sessionKey: 'macroWeight', elementId: 'macroWeight' },
        { sessionKey: 'macroActivity', elementId: 'macroActivity' },
        { sessionKey: 'macroGoal', elementId: 'macroGoal' }
    ];


    function setFormValueFromSessionStorage({ sessionKey, elementId }) {
        let value = sessionStorage.getItem(sessionKey);

        if (value) {
            console.log(value);

            document.getElementById(elementId).value = value;

        }
    }
    function saveToSessionStorage(event) {
        const element = event.target;
        const sessionKey = element.id;
        const value = element.value;
        sessionStorage.setItem(sessionKey, value);
    }
    
    // Add event listeners to all form fields
    formFields.forEach(field => {
        const element = document.getElementById(field.elementId);
        if (element) {
            element.addEventListener('input', saveToSessionStorage);
        }
    });
    
    formFields.map(setFormValueFromSessionStorage);
    //Session
    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        if(typeof (Storage)!== "undefined"){
        sessionStorage.setItem('height', height);
        sessionStorage.setItem('weight', weight);
        }
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
        if(typeof (Storage)!== "undefined"){
        sessionStorage.setItem('age', age);
        sessionStorage.setItem('gender', gender);
        sessionStorage.setItem('calorieHeight', height);
        sessionStorage.setItem('calorieWeight', weight);
        sessionStorage.setItem('activity', activity);
        }
        const calories = calculateCalories(age, gender, height, weight, activity);
        document.getElementById('calorieResult').innerHTML = `
            <p>Your estimated daily calorie needs: <strong>${calories.toFixed(0)} calories</strong></p>
        `;
    });

    
    macroForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const gender = document.getElementById('macroGender').value;
        const age = parseInt(document.getElementById('macroAge').value);
        const height = parseFloat(document.getElementById('macroHeight').value);
        const weight = parseFloat(document.getElementById('macroWeight').value);
        const activity = parseFloat(document.getElementById('macroActivity').value);
        const goal = document.getElementById('macroGoal').value;
        if(typeof (Storage)!== "undefined"){
        sessionStorage.setItem('macroAge', age);
        sessionStorage.setItem('macroGender', gender);
        sessionStorage.setItem('macroHeight', height);
        sessionStorage.setItem('macroWeight', weight);
        sessionStorage.setItem('macroActivity', activity);
        sessionStorage.setItem('macroGoal', goal);
        }
        if (validateForm(gender, age, height, weight, activity, goal)) {
            const macros = calculateMacros(gender, age, height, weight, activity, goal);
            displayMacros(macros);
        }
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


    function validateForm(gender, age, height, weight, activity, goal) {
        if (gender === '') {
            alert('Please select your gender.');
            return false;
        }
        if (age < 18 || age > 100) {
            alert('Please enter a valid age between 18 and 100.');
            return false;
        }
        if (height < 100 || height > 250) {
            alert('Please enter a valid height between 100 and 250 cm.');
            return false;
        }
        if (weight < 40 || weight > 300) {
            alert('Please enter a valid weight between 40 and 300 kg.');
            return false;
        }
        if (activity === '') {
            alert('Please select your activity level.');
            return false;
        }
        if (goal === '') {
            alert('Please select your goal.');
            return false;
        }
        return true;
    }

    function calculateMacros(gender, age, height, weight, activity, goal) {
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        let dailyCalories;
        switch (goal) {
            case 'maintenance':
                dailyCalories = bmr * activity;
                break;
            case 'fat_loss':
                dailyCalories = bmr * activity * 0.8;
                break;
            case 'muscle_gain':
                dailyCalories = bmr * activity * 1.2;
                break;
        }

        const protein = dailyCalories * 0.25 / 4; // 25% of calories from protein
        const carbs = dailyCalories * 0.45 / 4; // 45% of calories from carbs
        const fat = dailyCalories * 0.3 / 9; // 30% of calories from fat

        return {
            calories: Math.round(dailyCalories),
            protein: Math.round(protein),
            carbs: Math.round(carbs),
            fat: Math.round(fat)
        };
    }

    function displayMacros(macros) {
        const macroResults = document.getElementById('macroResults');
        macroResults.innerHTML = `
            <h3>Your Recommended Macros:</h3>
            <p>Calories: ${macros.calories} kcal</p>
            <p>Protein: ${macros.protein} g</p>
            <p>Carbs: ${macros.carbs} g</p>
            <p>Fat: ${macros.fat} g</p>
        `;
    }
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
