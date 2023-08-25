import {expect,describe,test} from "@jest/globals";

const arr = ['diory','pribadi'];

describe('test array',()=>{
    test('arr',()=>{
        expect(arr).toEqual(['diory','pribadi']);
        expect(arr).toHaveLength(2);
        expect(arr).toContain('diory');
        expect(arr).toContain('pribadi');
    });

    test('array containing',()=>{
        expect(['Budiman','Siska','diory','pribadi']).toEqual(expect.arrayContaining(arr));
        expect(['Budiman','Siska','DiorY','Pribadi']).toEqual(expect.arrayContaining([expect.stringMatching(/diory/i),expect.stringMatching(/pribadi/i)]));
        expect(['Siska']).not.toEqual(expect.arrayContaining(arr));
        expect(['Siska']).toEqual(expect.not.arrayContaining(arr));
        expect(['Siska']).toEqual([expect.not.stringMatching(/[0-9]/)]);
    });

    test('Content Equal',()=>{
        const users = [{username : 'Diory',address : 'Bandung'},{username: 'Budiman',address: 'Jakarta'}];
        expect(users).toHaveLength(2);
        expect(users).toContainEqual({username : 'Diory',address: 'Bandung'});
    });
})