import {describe, expect, test} from '@jest/globals';
import Genap from "../src/genap.js";

describe('Test Genap Function',()=>{
    test('Genap(2) is should true',()=>{
        expect(Genap(2)).toBeTruthy();
    })

    test('Genap(3) is should false',()=>{
        expect(Genap(3)).toBeFalsy();
    })

    test('Genap(4) not to be false',()=>{
        expect(Genap(4)).not.toBeFalsy();
    })
})