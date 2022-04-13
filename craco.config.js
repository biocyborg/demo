const CracoLessPlugin = require('craco-less');

const theme = require('./theme');

if (process.env.NODE_ENV === 'development') {
  // 区分测试和生产环境，cra 的环境变量无法满足
  // eslint-disable-next-line
  require('dotenv').config({
    path: `.env`,
  });
}

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
