 const config = {
    development: {
        PORT: 5000
    },

    production: {
        PORT: 1234
    }
    
}

module.exports = config[process.env.node_env || 'development'];