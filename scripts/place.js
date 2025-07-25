// Set footer date and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static values for the weather
const temperature = 40; // °F
const windSpeed = 6; // mph

// Display static values on page
document.getElementById("temperature").textContent = temperature;
document.getElementById("wind-speed").textContent = windSpeed;

// Wind Chill calculation
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Apply only if valid conditions
let windChill = "N/A";
if (temperature <= 50 && windSpeed > 3) {
  windChill = `${calculateWindChill(temperature, windSpeed)} °F`;
}

document.getElementById("windchill").textContent = windChill;
