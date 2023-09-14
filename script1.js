const FahrenheitTocelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const errorMsg = document.querySelector('.error__msg');

const convertTemprature = () => {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const result = document.getElementById('celsius');

    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (fahrenheit) {
        const celsius = FahrenheitTocelsius(fahrenheit)
        console.log(celsius);
        result.value = celsius;
    } else {
        errorMsg.style.display = "flex"
        celsius.value = "";
    }
}

const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener("click", convertTemprature)

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener("click", () => {
    fahrenheit.value = "";
    celsius.value = "";
    errorMsg.style.display = "none";
})
