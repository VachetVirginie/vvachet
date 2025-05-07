const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "public/")
            }
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                minSize: 20000,
                maxSize: 250000,
                cacheGroups: {
                    vendors: {
                        test: /[\\]node_modules[\\]/,
                        priority: -10
                    }
                }
            }
        },
        performance: {
            hints: "warning",
            maxAssetSize: 250000,
            maxEntrypointSize: 400000
        }
    },
    css: {
        extract: process.env.NODE_ENV === "production",
        sourceMap: false,
        loaderOptions: {
            css: {
                // Minimiser le CSS en production
                minimize: process.env.NODE_ENV === "production"
            }
        }
    },
    productionSourceMap: false, // Désactiver les source maps en production
    chainWebpack: config => {
        // Optimisations pour la production
        if (process.env.NODE_ENV === "production") {
            // Minimiser les chunks JavaScript
            config.optimization.minimize(true);

            // Supprimer les commentaires dans le HTML
            config.plugin("html").tap(args => {
                args[0].minify = {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: false
                };
                return args;
            });
        }
    }
};
