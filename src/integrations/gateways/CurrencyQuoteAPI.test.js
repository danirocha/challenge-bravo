import _CurrencyQuoteAPI from './CurrencyQuoteAPI';
import CurrencyMapper from '../../mappers/Currency';

jest.mock('../../libs/Fetch');
jest.mock('../../mappers/Currency');

const CurrencyQuoteAPI = new _CurrencyQuoteAPI(CurrencyMapper);
process.env.CURRENCY_QUOTE_BASE_URL = 'http://base-url/;'

describe('#_generateUrl', () => {
    test('it returns http://base-url/BRL-USD when passed USD as the backing currency and [BRL] as the currency code', () => {
        const backingCurrencyCode = 'USD';
        const currenciesCodes = ['BRL'];

        try {
            const result =  CurrencyQuoteAPI._generateUrl(backingCurrencyCode, currenciesCodes);

            expect(result).toBeTruthy();
            expect(result).toBe('http://base-url/BRL-USD');
        } catch (err) {
            expect(err).toBeFalsy;
        }
    });

    test('it returns http://base-url/BRL-USD,EUR-USD when passed USD as the backing currency and [BRL, EUR] as the currencies', () => {
        const backingCurrencyCode = 'USD';
        const currenciesCodes = ['BRL', 'EUR'];

        try {
            const result =  CurrencyQuoteAPI._generateUrl(backingCurrencyCode, currenciesCodes);

            expect(result).toBeTruthy();
            expect(result).toBe('http://base-url/BRL-USD,EUR-USD');
        } catch (err) {
            expect(err).toBeFalsy;
        }
    });
});