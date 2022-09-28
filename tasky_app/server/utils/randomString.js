function randomString(length){
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let characterslength = characters.length;
    for ( let i=0;i<length;i++)
    {
        result += characters.charAt(Math.floor(Math.random() * characterslength));
    }
    return result;
}
export default randomString;