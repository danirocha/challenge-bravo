class Utils {
    constructor() {
        // -
    }

    newObject (...args) {
        const objects = [{}].concat(args);
        
        return objects.reduce((acc, cur) => ({ ...acc, ...cur }));
    }

    arrayAContainsB (arrayA, arrayB) {
        return arrayB.every(item => arrayA.includes(item));
    }

    formatObjectToKeyValue (dataObj) {
        const entries = Object.entries(dataObj); 
        
        return entries.reduce((acc, item) => {
            acc.push({
                key: item[0],
                val: item[1]
            });

            return acc;
        }, []);
    }
}

export default new Utils();