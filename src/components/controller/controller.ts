import type { NewsResponse, SourcesResponse } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsResponse) => void): void {
        if (!(e.target instanceof HTMLElement) || !(e.currentTarget instanceof HTMLElement)) {
            return;
        }
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId === null) {
                    return;
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            const parent = target.parentNode;
            if (!(parent instanceof HTMLElement)) {
                return;
            }
            target = parent;
        }
    }
}

export default AppController;
