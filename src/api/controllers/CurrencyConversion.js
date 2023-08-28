import { SUCCESS, INTERNAL_ERROR, UNPROCESSABLE_ENTITY } from '../ResMessages';

export default class CurrencyConversion {
    constructor (CurrencyService) {
        this.CurrencyService = CurrencyService;
    }
    
    async list (req, res) {
        try {
            const { from, to, amount } = req.query;

            const convertedAmount = await this.CurrencyService.convertsAmountBetweenCurrencies(from, to, +amount);
            
            return res.sendResponse({ ...SUCCESS, data: convertedAmount });
        } catch (err) {
            return res.sendResponse(err.unknow_source ? { ...UNPROCESSABLE_ENTITY, message: "Invalid conversion: currencies' codes are unknown" } : INTERNAL_ERROR);
        }
    }
};