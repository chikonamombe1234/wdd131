
const temperature = 2;
const windSpeed = 15;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

const modifiedDate = new Date(document.lastModified);
document.querySelector("#last-modified").textContent = Number.isNaN(modifiedDate.getTime())
    ? "Unavailable"
    : modifiedDate.toLocaleString();
