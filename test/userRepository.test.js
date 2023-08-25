import {expect, describe, test, afterEach, beforeAll} from "@jest/globals";
import {getUsers,initialUser, clearDataUsers, addUser} from "../src/userRepository.js";

beforeAll(()=>{
    initialUser();
});

afterEach(()=>{
    clearDataUsers();
});

describe('Test get users function',()=>{
    test('get users not fails',async ()=>{
        const users = await getUsers();
        expect(users).toHaveLength(1);
        expect(users).toContainEqual({username : 'Diory',address : 'Bandung'});
    });

    test('get users fails',async ()=>{
        await expect(getUsers(false)).rejects.toMatch(/server error/i);
    });

    test('get users after clear',async ()=>{
        const users = await  getUsers();
        expect(users).toHaveLength(0);
        expect(users).toEqual([]);
    });
});

describe('Test addUser function',()=>{
    test('add user success',async ()=>{
        const result = addUser({username:'Budiman',address:'Jakarta'});
        expect(result).toMatch(/user berhasil ditambahkan/i);
        const users = await getUsers();
        expect(users).toHaveLength(1);
        expect(users).toEqual([{username:'Budiman',address :'Jakarta'}]);
    });

    test('add user fail',async ()=>{
        expect(()=>addUser({username:'Siska'})).toThrow(/Tidak boleh kosong/i);
    });
});


