import Schema from '../../libs/Schema';
import { BAD_REQUEST } from '../ResMessages';

const currency = async (req, res, next) => {
    const currencyDTO = req.body;
    const currencySchema = Schema.generateCurrencySchema();

    try {
        await Schema.validate(currencySchema, currencyDTO);

        next();
    } catch (err) {
        return res.sendResponse({ ...BAD_REQUEST, error: { errors: err.errors } });
    }
};

const currencyConversion = async (req, res, next) => {
    const currencyConversionDTO = req.query;
    const currencyConversionSchema = Schema.generateCurrencyConversionSchema();
    
    try {
        await Schema.validate(currencyConversionSchema, currencyConversionDTO);

        next();
    } catch (err) {
        return res.sendResponse({ ...BAD_REQUEST, error: { errors: err.errors } });
    }
};

export { currency, currencyConversion };