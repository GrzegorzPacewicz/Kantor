{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-form__inputAmount");
    const currencyElement = document.querySelector(".js-form__select");
    const resultElement = document.querySelector(".js-form__result");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = amountElement.value;
        const currency = currencyElement.value;
        const rateEur = 4.7011;
        const rateGbp = 5.4409;
        const rateUsd = 4.7126;

        switch (currency) {
            case "EUR":
                result = (amount / rateEur);
                break;
            case "GBP":
                result = (amount / rateGbp);
                break;
            case "USD":
                result = (amount / rateUsd);
                break;
        }
        resultElement.value = result.toFixed(2) + ` ${currency}`;

    });
}