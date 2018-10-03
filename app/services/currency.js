const CURRENCIES_URL = 'http://phisix-api3.appspot.com/stocks.json';

const commonFetch = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => ({}))
};

export const fetchCurrency = () => {
    return commonFetch(CURRENCIES_URL)
};