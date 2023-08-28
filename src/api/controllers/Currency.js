import { SUCCESS, CREATED, INTERNAL_ERROR, UNPROCESSABLE_ENTITY } from '../ResMessages';

export default class Currency {
    constructor (CurrencyService) {
        this.CurrencyService = CurrencyService;
    }

    async list (req, res) {
        try {
            const currenciesList = await this.CurrencyService.listSupportedCurrencies();

            return res.sendResponse({...SUCCESS, data: { list: currenciesList }});
        } catch (err) {
            return res.sendResponse(INTERNAL_ERROR);
        }
    }
    
    async store (req, res) {
        try {
            const newCurrency = await this.CurrencyService.storeCurrency(req.body);
            
            return res.sendResponse({ ...CREATED, data: newCurrency });
        } catch (err) {
            return res.sendResponse(err.already_registered ? { ...UNPROCESSABLE_ENTITY, message: 'This currency is already registered' } : INTERNAL_ERROR);
        }
    }

    async delete(req, res) {
        try {
            const deletedCurrency = await this.CurrencyService.deleteCurrency(req.params);
            
            return res.sendResponse({...SUCCESS, data: deletedCurrency});
        } catch (err) {
            return res.sendResponse(err.not_found ? { ...UNPROCESSABLE_ENTITY, message: 'This currency is not registered' } : INTERNAL_ERROR);
        }
    }
};