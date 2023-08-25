import {expect, describe, test, afterEach} from "@jest/globals";

let str = 'a';

afterEach(()=>{
    str += 'a';
});

describe('Test setup string',()=>{
    test('Test string 1',()=>{
        expect(str).toEqual('a');
    });

    test('Test string 2',()=>{
        expect(str).toEqual('aa');
    });
});