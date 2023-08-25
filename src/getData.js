export const getData = (status)=>{
    let users = [];
    return new Promise(((resolve, reject)=>{
        if(!status) reject('Server Error');
        setTimeout(()=>{
            users = ['Siska','Rendi','Bima','diory'];
            resolve(users);
        },3000);
    }))
};

export const  findName = async (name,status = true) =>{
    try{
        const users = await getData(status);
        const pattern = new RegExp(name,'i');
        const user = users.find(u => pattern.test(u));
        if(!user) return "Name tidak ditemukan";
        return user;
    }catch (e) {
        throw e;
    }
};
