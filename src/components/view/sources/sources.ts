import type { Source } from '../../../types';
import './sources.css';
import { requireElement } from '../../../utils/dom';

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemNameElement = requireElement<HTMLElement>(sourceClone, '.source__item-name');
            itemNameElement.textContent = item.name;
            const itemElement = requireElement<HTMLElement>(sourceClone, '.source__item');
            itemElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (!(sourcesContainer instanceof HTMLElement)) {
            return;
        }
        sourcesContainer.append(fragment);
    }
}

export default Sources;
