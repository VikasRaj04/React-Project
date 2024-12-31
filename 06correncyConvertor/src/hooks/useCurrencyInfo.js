import { useEffect, useState } from "react";

const URL_OPEN_EXCHANGE = 'https://open.er-api.com/v6/latest/';
const URL_CURRENCY_NAMES = 'https://openexchangerates.org/api/currencies.json'

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        const r = fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.rates));
        // console.log(data);
    }, [currency]);

    return data;
}

export default useCurrencyInfo;