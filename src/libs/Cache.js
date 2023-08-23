import NodeCache from 'node-cache';
import config from '../config/cache';
import utils from './Utils';

class Cache {
    constructor () {
        this.cache = new NodeCache(config.data);
    }

    set (dataObj) {
        const dataList = utils.formatObjectToKeyValue(dataObj);

        if (dataList.length) {
            this.cache.mset(dataList.map(data => ({ ...data, ttl: config.TTL})));
        }
    }

    get (dataKey) {
        return this.cache.get(dataKey);
    }

    delete (dataKey) {
        this.cache.del(dataKey);
    }
}

export default new Cache();