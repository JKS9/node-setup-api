module.exports = {
    project_name: 'SetUpAnswer',
    env_type: process.env.ENV_TYPE,
    env_name: process.env.ENV_NAME,
    authentication_credentials: {
        mongodb: {
            host: process.env.MONGO_HOST,
            port: process.env.MONGO_PORT,
            db: process.env.MONGO_DB,
            user: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
        },
        jwt: {
            secret: process.env.JWT_SECRET,
        },
    },
    settings: {
        user_auth_jwt_lifetime: 3600, // = 1 heure
        user_refresh_jwt_lifetime: 15778800, // ~= 6 mois
    },
    logs: {
        console: process.env.ENABLE_LOG_CONSOLE === 'true',
        file: process.env.ENABLE_LOG_FILE === 'true',
    },
    services: {
        api: {
            http: {
                max_request_body_size: '100mb',
            },
        },
    },
};
