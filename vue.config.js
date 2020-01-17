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

    publicPath: undefined,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    lintOnSave: false
};