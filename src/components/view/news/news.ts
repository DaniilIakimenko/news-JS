import type { Article } from '../../../types';
import './news.css';
import { requireElement } from '../../../utils/dom';

class News {
    draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        if (!(newsItemTemp instanceof HTMLTemplateElement)) {
            return;
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                const itemElement = requireElement<HTMLElement>(newsClone, '.news__item');
                itemElement.classList.add('alt');
            }

            const metaPhotoElement = requireElement<HTMLElement>(newsClone, '.news__meta-photo');
            metaPhotoElement.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const metaAuthorElement = requireElement<HTMLElement>(newsClone, '.news__meta-author');
            metaAuthorElement.textContent = item.author || item.source.name;
            const metaDateElement = requireElement<HTMLElement>(newsClone, '.news__meta-date');
            metaDateElement.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const descriptionTitleElement = requireElement<HTMLElement>(newsClone, '.news__description-title');
            descriptionTitleElement.textContent = item.title;
            const descriptionSourceElement = requireElement<HTMLElement>(newsClone, '.news__description-source');
            descriptionSourceElement.textContent = item.source.name;
            const descriptionContentElement = requireElement<HTMLElement>(newsClone, '.news__description-content');
            descriptionContentElement.textContent = item.description;
            const readMoreLinkElement = requireElement<HTMLElement>(newsClone, '.news__read-more a');
            readMoreLinkElement.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (!(newsContainer instanceof HTMLElement)) {
            return;
        }
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
