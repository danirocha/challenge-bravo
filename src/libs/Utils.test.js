import Utils from './Utils';

describe('#newObject', () => {
    test("it returns a new object that equals { id: 1 } when passed { id: 1 }", () => {
        const obj1 = {
            id: 1
        };

        try {
            const newObj = Utils.newObject(obj1);

            expect(newObj).not.toBe(obj1);
            expect(newObj).toEqual({ id: 1 });
        } catch (err) {
            expect(err).toBeFalsy();
        }
    });

    
    test("it returns a new object that equals { id: 1, name: 'prop' } when passed { id: 1 } and { name: 'prop' }", () => {
        const obj1 = {
            id: 1
        };
        const obj2 = {
            name: 'prop'
        };

        try {
            const newObj = Utils.newObject(obj1, obj2);

            expect(newObj).not.toBe(obj1);
            expect(newObj).not.toBe(obj2);
            expect(newObj).toEqual({ id: 1, name: 'prop' });
        } catch (err) {
            expect(err).toBeFalsy();
        }
    });
});

describe('#arrayAContainsB', () => {
    test("it returns true when passed [1, 2] as the A and B", () => {
        const arrayA = [1, 2];

        try {
            const result = Utils.arrayAContainsB(arrayA, arrayA);

            expect(result).toBeTruthy();
        } catch (err) {
            expect(err).toBeFalsy();
        }
    });

    test("it returns true when passed [1, 2] as the A and [2] as the B", () => {
        const arrayA = [1, 2];
        const arrayB = [2];

        try {
            const result = Utils.arrayAContainsB(arrayA, arrayB);

            expect(result).toBeTruthy();
        } catch (err) {
            expect(err).toBeFalsy();
        }
    });

    test("it returns false when passed [1] as the A and [1, 2] as the B", () => {
        const arrayA = [1];
        const arrayB = [1, 2];

        try {
            const result = Utils.arrayAContainsB(arrayA, arrayB);

            expect(result).toBeFalsy();
        } catch (err) {
            expect(err).toBeFalsy();
        }
    });
});

describe('#formatObjectToKeyValue', () => {
    test("it returns [{ key: 'name', val: 'Dani' }] when passed { name: 'Dani' }", () => {
        const obj = {
            name: 'Dani'
        };

        try {
            const result = Utils.formatObjectToKeyValue(obj);
            const [ nameObj ] = result;

            expect(result).toBeTruthy()
            expect(result.length).toBe(1);
            expect(nameObj).toBeTruthy();
            expect(nameObj).toHaveProperty('key', 'name');
            expect(nameObj).toHaveProperty('val', 'Dani');
        } catch (err) {
            expect(err).toBeFalsy();
        }
    });
    test("it returns [{ key: 'name', val: 'Dani' }, { key: 'age', val: 26 }] when passed { name: 'Dani', age: 26 }", () => {
        const obj = {
            name: 'Dani',
            age: 26
        };

        try {
            const result = Utils.formatObjectToKeyValue(obj);
            const [ nameObj, ageObj ] = result;

            expect(result).toBeTruthy()
            expect(result.length).toBe(2);
            expect(nameObj).toBeTruthy();
            expect(nameObj).toHaveProperty('key', 'name');
            expect(nameObj).toHaveProperty('val', 'Dani');
            expect(ageObj).toBeTruthy();
            expect(ageObj).toHaveProperty('key', 'age');
            expect(ageObj).toHaveProperty('val', 26);
        } catch (err) {
            expect(err).toBeFalsy();
        }
    });
});