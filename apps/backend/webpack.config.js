const { composePlugins, withNx, NxWebpackPlugin } = require('@nx/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(
    new NxWebpackPlugin({
      sourceMap: true,
      main: 'apps/backend/src/main.ts',
      target: 'node',
      compiler: 'tsc',
      tsConfig: 'apps/backend/tsconfig.app.json',
      outputPath: 'dist/apps/backend',
    }),
  );
  return config;
});
