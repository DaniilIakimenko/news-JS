type LoaderOptions = {
    apiKey?: string | undefined;
    [key: string]: string | undefined;
};
declare class Loader {
    private baseLink;
    private options;
    constructor(baseLink: string, options: LoaderOptions);
    getResp<T>({ endpoint, options }: {
        endpoint: string;
        options?: LoaderOptions;
    }, callback?: (data: T) => void): void;
    errorHandler(res: Response): Response;
    makeUrl(options: LoaderOptions, endpoint: string): string;
    load<T>(method: 'GET' | 'POST', endpoint: string, callback: (data: T) => void, options?: LoaderOptions): void;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map