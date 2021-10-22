import nhsd from '@/nhsd';

export default class NHSDSearchBar {
    constructor(componentEl) {
        if (!componentEl) return null;
        this.componentEl = componentEl;

        this.textInput = this.componentEl.querySelector('.nhsd-t-form-input');
        if (!this.textInput) return null;

        this.clearButton = this.componentEl.querySelector('[data-clear-button]');
        if (!this.clearButton) return null;

        this.#bindEvents();
        this.#showClearButton();
    }

    #bindEvents() {
        nhsd(this.textInput).on(['input.search-bar'], () => this.#showClearButton());

        nhsd(this.clearButton).on('click.search-bar', () => {
            this.textInput.value = '';
            nhsd(this.textInput).trigger(['input', 'change']);
            this.textInput.focus();
        });
    }

    #showClearButton() {
        if (this.textInput.value.length > 0) {
            this.clearButton.classList.remove('nhsd-!t-display-hide');
        } else {
            this.clearButton.classList.add('nhsd-!t-display-hide');
        }
    }
}
