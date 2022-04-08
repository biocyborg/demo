const CracoLessPlugin = require('craco-less');

const theme = require('./theme');

module.exports = {
  webpack: {
    resolve: {
      alias: {
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
      },
    },
  },

  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: ['node_modules', 'src'],
        },
      },
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
