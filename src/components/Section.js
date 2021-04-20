export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }
    appendAddItem(element) {
        this._container.append(element);
    }
    prependAddItem(element) {
        this._container.prepend(element);
    }
    renderItems(item) {
        item.forEach((item) => {
            this._renderer(item);
        });
    }
}