import {describe, expect, test} from '@jest/globals';
import Math from '../src/math.js';

describe('Test Math Function',()=>{
    test('sum(2,1) to equal 3',()=>{
        expect(Math(2,4)).toBe(6);
    })

    test('sum(3,1) to equal 4',()=>{
        expect(Math(3,1)).toBe(4);
    })
})