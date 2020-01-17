module.exports = {
    css: {
        extract: false
    },

    configureWebpack: {
        devServer: {
            clientLogLevel: 'info',
            watchOptions: {
                poll: true
            }
        },
        optimization: {
            splitChunks: false
        },
    },

    publicPath: process.env.NODE_ENV === 'production'
    ? '/calculator/'
    : '/',
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    lintOnSave: false,
};