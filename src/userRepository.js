import {users} from "../data/user.js";

function getUsers(status = true){
    return new Promise((resolve,reject)=>{
        if(!status) reject('Server error');
        resolve(users);
    });
}

function initialUser(){
    users.push({username : 'Diory',address : 'Bandung'});
}

function clearDataUsers(){
    users.splice(0,1);
}

function addUser({username,address}) {
    if(!username || !address) throw new Error('Username atau address tidak boleh kosong');
    users.push({username, address});
    return 'User berhasil ditambahkan';
}


export {
    getUsers, initialUser , clearDataUsers, addUser
};