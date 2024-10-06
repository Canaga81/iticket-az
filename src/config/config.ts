export default {
    
    port: process.env.PORT,

    database: {
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT
    },

    jwtSecret: process.env.JWT_SECRET,

}