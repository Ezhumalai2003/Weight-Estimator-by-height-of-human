document.getElementById("weightForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get height input from the user
    const height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(height) || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid height.";
        return;
    }
    
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    
    // Calculate a healthy weight range based on a BMI between 18.5 and 24.9
    const minBMI = 18.5;
    const maxBMI = 24.9;
    
    const minWeight = (minBMI * (heightInMeters ** 2)).toFixed(2);
    const maxWeight = (maxBMI * (heightInMeters ** 2)).toFixed(2);
    
    // Display the result
    document.getElementById("result").innerHTML = `
        For a height of ${height} cm, a healthy weight range is between 
        <strong>${minWeight} kg</strong> and <strong>${maxWeight} kg</strong>.
    `;

    // If weight exceeds 90kg, provide tips
    if (maxWeight > 90) {
        document.getElementById("weightTips").innerHTML = `
            <strong>Weight Management Tips:</strong>
            <ul>
                <li>Incorporate more fruits and vegetables into your meals.</li>
                <li>Avoid sugary drinks and limit high-calorie snacks.</li>
                <li>Exercise regularly (at least 30 minutes a day).</li>
                <li>Drink plenty of water throughout the day.</li>
                <li>Focus on portion control and avoid overeating.</li>
            </ul>
        `;
    } else {
        document.getElementById("weightTips").innerHTML = '';
    }
});

// Reset functionality
document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("height").value = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("weightTips").innerHTML = '';
});
