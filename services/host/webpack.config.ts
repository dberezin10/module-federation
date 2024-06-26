import path from "path";

import { IEnvVariables, IPaths, mainWebpackConfig } from '@packages/webpack-config'
import webpack from "webpack";
import PackageJson from './package.json'

interface EnvVariablesHost extends IEnvVariables {
    PAYMENT_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariablesHost) => {

    const PAYMENT_REMOTE_URL = env.PAYMENT_REMOTE_URL ?? "http://localhost:5001"
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? "http://localhost:5002"

    const isDev = env.mode === "development";
    const isProd = env.mode === "production";


    const paths: IPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const config = mainWebpackConfig({
      port: env.port ?? 5000,
      mode: env.mode ?? "production",
      paths,
      analyzer: env.analyzer,
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        payment: `payment@${PAYMENT_REMOTE_URL}/remoteEntry.js`,
        about: `about@${ADMIN_REMOTE_URL}/remoteEntry.js`
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
