import {describe, expect, test} from '@jest/globals';

import {getData,findName} from "../src/getData.js";

describe('Test Asynchronous function getData',()=>{
    test('get Data without error',async ()=>{
        const users = await getData(true);
        expect(users).toHaveLength(4);
        expect(users).toEqual(expect.arrayContaining(['Siska','Rendi','Bima','diory']));
    });

    test('get Data with error',async ()=>{
        await expect(getData(false)).rejects.toMatch(/server error/i);
    });
});

describe('Test Asynchronous function findName',()=>{
    test('Find name diory without error',async ()=>{
        await expect(findName('diory')).resolves.toMatch(/diory/i);
    });

    test('Not Found Name without error',async ()=>{
        await expect(findName('noName')).resolves.toMatch(/name tidak ditemukan/i);
    });

    test('Find Name Error',async ()=>{
        await expect(findName('diory',false)).rejects.toMatch(/server error/i);
    });
});
