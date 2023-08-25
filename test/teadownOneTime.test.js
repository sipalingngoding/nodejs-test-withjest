import {expect, describe, test, afterAll} from "@jest/globals";

let number = 10;

afterAll(()=>{
    number += 2;
});

describe('Test Teardown One Time',()=>{
    test('Number should be 10',()=>{
        expect(number).toBe(10);
        expect(number).not.toBe(12);
    });
});