import {expect, describe, test, beforeAll} from "@jest/globals";

let number = 10;

beforeAll(()=>{
    number += 2;
});


describe('Test Set Up One Time',()=>{
    test('Number + 1 should be 13',()=>{
        const value = number + 1
        expect(value).toBe(13);
    })

    test('Number x 2 should be 24 ',()=>{
        const value = number*2;
        expect(value).toBe(24);
    });
});