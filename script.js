const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

const errorMsg = document.querySelector('.error__msg');

const convertTemprature = () => {
    const celsiusInput = document.getElementById('celsius');
    const result = document.getElementById('fahrenheit');

    const celsius = parseFloat(celsiusInput.value);

    if (celsius) {
        const fahrenheit = celsiusToFahrenheit(celsius)
        console.log(fahrenheit);
        result.value = fahrenheit;
    } else {
        errorMsg.style.display = "flex"
        fahrenheit.value = "";
    }
}

const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener("click", convertTemprature)

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener("click", () => {

    celsius.value = "";
    fahrenheit.value = "";
    errorMsg.style.display = "none";
})
