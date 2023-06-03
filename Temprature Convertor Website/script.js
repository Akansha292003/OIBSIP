document.getElementById("convertButton").addEventListener("click", convertTemperature);

function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelection = document.getElementById("unitSelection").value;
    var result = document.getElementById("result");

    if (temperatureInput === "" || isNaN(temperatureInput)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    var convertedTemperature;
    var unit;

    if (unitSelection === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        unit = "Fahrenheit";
    } else if (unitSelection === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        unit = "Celsius";
    } else if (unitSelection === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        unit = "Kelvin";
    }

    result.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + unit;
}
