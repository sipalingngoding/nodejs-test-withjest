import {expect,describe,test} from "@jest/globals";
class LaCroix {
    constructor(flavor) {
        this.flavor = flavor;
    }
}

describe('Test object',()=>{
    test('Object',()=>{
        const person = {username : 'diory',address : 'Bandung'};
        expect(person).toHaveProperty('username');
        expect(person).toHaveProperty('address','Bandung');
        expect(person).toEqual({address : 'Bandung',username : 'diory'});
    });

    test('are not semantically the same', () => {
        expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});
        expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'})
    });

    test('Object Containing',()=>{
        const obj = {a:'a',b:'b',c:'c'};
        expect(obj).toEqual( {a:'a',b:'b',c:'c'});

        expect(obj).toEqual(expect.objectContaining({a:'a'}));
        expect(obj).not.toEqual(expect.objectContaining({d:'d'}));
    });
});