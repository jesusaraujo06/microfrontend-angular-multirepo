const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-shopping',

  exposes: {
    // Alias : Direccion del module
    './ProductsModule': './src/app/products/products.module.ts',
  },

  shared: {
    ...shareAll({ 
      singleton: true, 
      strictVersion: true, requiredVersion: 'auto' 
    }),
  },

});
