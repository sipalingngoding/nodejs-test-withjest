import {expect,describe,test} from "@jest/globals";


describe('test Number',()=>{
    test('2+1',()=>{
        const result = 2+1;

        expect(result).toBe(3);
        expect(result).not.toBe(5);
        expect(result).toBeGreaterThan(2);
        expect(result).toBeLessThan(10);
    })

    test('0.1 + 0.2',()=>{
        const value = 0.1 + 0.2;
        expect(value).not.toBeNaN();
        expect(value).toBeCloseTo(0.3);
    })

    test('2/a',()=>{
        const value = 2/'a';
        expect(value).toBeNaN();
    })
})