import {expect, describe, test, beforeEach} from "@jest/globals";

let number = 10;

beforeEach(()=>{
    number += 1;
});


describe('Test setup number',()=> {
    test('Test number 1',()=>{
        expect(number).toBe(11);
    });

    test('Test number 2',()=>{
        const value = number + 2; //14
        expect(value).not.toBe(13);
        expect(value).toBe(14);
    });

    test('Test number 3',()=>{
        const value = number * 2; //26
        expect(value).not.toBe(22);
        expect(value).toBe(26);
    });
});
