module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Habu - Agency Vuejs App";
                return args;
            })
    }
}