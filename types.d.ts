export declare enum Category {
    GENERAL = "general",
    BUSINESS = "business",
    TECHNOLOGY = "technology",
    SPORTS = "sports",
    ENTERTAINMENT = "entertainment",
    SCIENCE = "science",
    HEALTH = "health"
}
type ResponseStatus = 'ok' | 'error';
type Source = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: Category;
    language: string;
    country: string;
};
type ArticleSource = {
    id: string | null;
    name: string;
};
type Article = {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
};
type NewsResponse = {
    status: ResponseStatus;
    totalResults: number;
    articles: Article[];
};
type SourcesResponse = {
    status: ResponseStatus;
    sources: Source[];
};
export type { ResponseStatus, Source, ArticleSource, Article, NewsResponse, SourcesResponse };
//# sourceMappingURL=types.d.ts.map