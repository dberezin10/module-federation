import path from "path";

import { IEnvVariables, IPaths, mainWebpackConfig } from '@packages/build-config'
import webpack from "webpack";
import PackageJson from './package.json'

export default (env: IEnvVariables) => {

    const paths: IPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }


    const config = mainWebpackConfig({
      port: env.port ?? 5002,
      mode: env.mode ?? "production",
      paths,
      analyzer: env.analyzer,
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
      name: 'about',
      filename: 'remoteEntry.js',
      exposes: {
        './Router': './src/router/Router.tsx',
        './App': './src/components/App.tsx'
      },
      shared: {
        ...PackageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: PackageJson.dependencies['react']
        },
        'react-router-dom': {
          eager: true,
          requiredVersion: PackageJson.dependencies['react-router-dom']
        },
        'react-dom': {
          eager: true,
          requiredVersion: PackageJson.dependencies['react-dom']
        }
      }
    }))

    return config
}
