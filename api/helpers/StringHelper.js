
const stringHelper = {
    // Generate Random Password
    generateRandomPassword: (length) => {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        let randomstring = '';
        for (var i=0; i<length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        return randomstring;
    },
};
  
module.exports = stringHelper;