import type { NewsResponse, SourcesResponse } from '../../types';
import AppLoader from './appLoader';
declare class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void): void;
    getNews(e: Event, callback: (data: NewsResponse) => void): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map