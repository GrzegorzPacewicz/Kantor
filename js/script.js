{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-form__inputAmount");
    const currencyElement = document.querySelector(".js-form__select");
    const resultElement = document.querySelector(".js-form__result");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const calcuteResult = (amount, currency) => {

            const rateEur = 4.7011;
            const rateGbp = 5.4409;
            const rateUsd = 4.7126;

            switch (currency) {
                case "EUR":
                    return amount / rateEur;
                case "GBP":
                    return amount / rateGbp;
                case "USD":
                    return amount / rateUsd;
            }
        };

        let result = calcuteResult(amount, currency);

        resultElement.value =`${result.toFixed(2)} ${currency}`;

    });
}