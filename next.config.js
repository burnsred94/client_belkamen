/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    config.module.rules.push({
        loader: '@svgr/webpack',
        issuer: /\.[jt]sx?$/,
        options: {
          prettier: false,
          svgo: true,
          svgoConfig: {
              plugins: [{
                  name: 'presset-default',
                  params: {
                      override: {
                          removeViewBox: false
                    }
                  }
              }]
          },
          titleProp: true,
        },
        test: /\.svg$/,
    });
    return config;
  }
};