{
    let formElement = document.querySelector(".js-form");
    let amountElement = document.querySelector(".js-form__inputAmount");
    let currencyElement = document.querySelector(".js-form__select");
    let resultElement = document.querySelector(".js-form__result");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let amount = amountElement.value;
        let currency = currencyElement.value;
        let rateEur = 4.7011;
        let rateGbp = 5.4409;
        let rateUsd = 4.7126;

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