import {expect,describe,test} from "@jest/globals";

describe('Test Truthiness',()=>{
    test('null',()=>{
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
    })

    test('Zero',()=>{
        const zero = 0;
        expect(zero).not.toBeNull();
        expect(zero).not.toBeUndefined();
        expect(zero).toBeFalsy();
        expect(zero).not.toBeTruthy();
    })
})