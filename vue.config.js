module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/dr-mili/dist/'
        : '/'
};
