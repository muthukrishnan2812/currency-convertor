import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_ddtrGzuqkdx6FHfkrU9ibaLxE2ICJBKHYC3oICmt');

export async function CurrencyConvertor(fromCurrency,toCurrency,units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multipler = res.data[toCurrency];
    return multipler*units;
}