module.exports = {
    security: {
        jwt_cert: '/api/certificates/Private.key',
        hash_salt: 'THIS_IS_A_SECTER'
    },
    
    mongodb: {
        url: 'mongodb://127.0.0.1:27017/MERN'
    },

    nodemailer: {

    },

    paths: {
        api: 'http://localhost:4000/',
        web: 'http://localhost:3000/'
    }
}