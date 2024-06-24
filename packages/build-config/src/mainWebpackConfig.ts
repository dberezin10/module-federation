import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import { IWebpackOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function mainWebpackConfig(options: IWebpackOptions): Configuration {

    const isDev = options.mode === "development";
    const isProd = options.mode === "production";

    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' :MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]"
                                }
                            },
                        },
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': options.paths.src
            }
        },
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: options.paths.html }),
            // new BundleAnalyzerPlugin(),
            isProd && new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            })
        ],
        devtool: isDev ? "inline-source-map" : false,
        devServer: {
            port: isDev ? options.port ?? 6000 : undefined,
            open: isDev,
            historyApiFallback: true,
            hot: isDev,
        },
    }
}
