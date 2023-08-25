import {describe,test,expect} from "@jest/globals";

describe('Test string',()=>{
    test('test string not use reqex',()=>{
        const str = "diory";
        expect(str).not.toBeUndefined();
        expect(str).toBe('diory');
        expect(str).toEqual('diory');
    });

    test('test string use reqex',()=>{
        const str = 'budI12';
        expect(str).not.toBeUndefined();
        expect(str).toHaveLength(6);
        expect(str).not.toHaveLength(5);
        expect(str).toMatch(/Budi/i);
        expect(str).toMatch(/[A-Z]/);
        expect(str).toMatch(/\D/);
    });

    test('string containing',()=>{
        const str = 'you break my heart break my hope';
        expect(str).toEqual(expect.stringContaining('hope'));
        expect(str).toEqual(expect.stringMatching(/Hope/i));
        expect(str).toContain('break');
    });
})