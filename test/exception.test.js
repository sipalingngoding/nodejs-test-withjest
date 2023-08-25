import {expect,describe,test} from "@jest/globals";

function showName(name){
    if(name === null) throw new Error('name tidak boleh null');
    return 'Hello '+name;
}

describe('Exception test',()=>{
    test('Show Name Function',()=>{
        //Not Throw
        expect(showName('Diory')).toBe('Hello Diory');

        //Throw Error
        expect(()=>showName(null)).toThrow(/Name tidak boleh null/i);
    });
});