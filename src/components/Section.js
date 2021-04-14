export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }
    appendAddItem(element) {
        this._container.append(element);
    }
    prependAddItem(element) {
        this._container.prepend(element);
    }
    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}