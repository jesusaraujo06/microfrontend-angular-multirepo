const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

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

// Para corregir el error import.meta, con esto se le dice al navegador desde donde se estan desplegando los assets utilizados por este MF.
moduleFederationConfig.output.publicPath = 'http://localhost:4201/';

module.exports = moduleFederationConfig;
