export interface IPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export type TMode = "development" | "production";

export interface IEnvVariables {
    mode: TMode
    port: number
    analyzer?: boolean;
}

export interface IWebpackOptions {
    port: number;
    paths: IPaths;
    mode: TMode;
    analyzer?: boolean;
}