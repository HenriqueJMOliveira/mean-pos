const config = {};

// Server Configuration
config.server = {
    port: 8080,
    url: 'http://localhost:8080',
    root: '/api', 
};

config.auth = {
    secret: 'meanpos20180126'
}

// Persistence Configuration 
config.persistence = {
    connectionString: "mongodb://dbadmin:auVW76zg@ds213118.mlab.com:13118/mean-pos",
};



module.exports = config;
