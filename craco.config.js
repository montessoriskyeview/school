const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, {env, paths}) => {
      // Optimize CSS extraction
      if (env === 'production') {
        // Replace the default CSS extraction plugin
        const cssExtractPluginIndex = webpackConfig.plugins.findIndex(
          plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
        );

        if (cssExtractPluginIndex !== -1) {
          webpackConfig.plugins[cssExtractPluginIndex] = new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
            ignoreOrder: true, // Enable to remove warnings about conflicting order
          });
        }

        // Add CSS optimization
        if (!webpackConfig.optimization) {
          webpackConfig.optimization = {};
        }

        if (!webpackConfig.optimization.minimizer) {
          webpackConfig.optimization.minimizer = [];
        }

        webpackConfig.optimization.minimizer.push(
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: [
                'default',
                {
                  discardComments: {removeAll: true},
                  normalizeWhitespace: true,
                  colormin: true,
                  minifyFontValues: true,
                  minifySelectors: true,
                },
              ],
            },
          })
        );
      }

      // Optimize CSS loading
      webpackConfig.module.rules.forEach(rule => {
        if (rule.oneOf) {
          rule.oneOf.forEach(oneOfRule => {
            if (oneOfRule.test && oneOfRule.test.toString().includes('css')) {
              // Add CSS loading optimization
              if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
                oneOfRule.use.forEach(useItem => {
                  if (useItem.loader && useItem.loader.includes('css-loader')) {
                    useItem.options = {
                      ...useItem.options,
                      importLoaders: 1,
                      modules: {
                        auto: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                      },
                    };
                  }
                });
              }
            }
          });
        }
      });

      return webpackConfig;
    },
  },
}; 