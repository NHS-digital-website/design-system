/* global document */

function attemptFocus(element) {
    try {
        element.focus();
    } catch {
        return false;
    }
    return element === document.activeElement;
}

function isMouseFocus() {
    try {
        return document.activeElement.matches(':not(:focus-visible)');
    } catch {
        return false;
    }
}

export default class FocusTrapper {
    modalContainer = null;

    lastFocus = null;

    disableTrapping = false;

    constructor(container) {
        this.modalContainer = container;
        const preNode = document.createElement('div');
        preNode.tabIndex = 0;
        this.modalContainer.parentNode.insertBefore(preNode, this.modalContainer);
        const postNode = document.createElement('div');
        postNode.tabIndex = 0;
        this.modalContainer.parentNode.insertBefore(postNode, this.modalContainer.nextSibling);
        document.addEventListener('focus', this.#trapFocus.bind(this), true);
    }

    #trapFocus(event) {
        if (this.disableTrapping) return;

        if (this.modalContainer.contains(event.target)) {
            this.lastFocus = event.target;
        } else {
            this.disableTrapping = true;
            this.focus(this.modalContainer);
            if (this.lastFocus === document.activeElement) {
                this.focus(this.modalContainer, true);
            }
            this.lastFocus = document.activeElement;
            this.disableTrapping = false;
        }
    }

    focus(parentEl, desc = false) {
        // Don't trap mouse focus
        if (isMouseFocus()) return true;

        const startingIndex = desc ? parentEl.children.length - 1 : 0;
        const modifer = desc ? -1 : 1;
        for (let i = startingIndex; i < parentEl.children.length && i >= 0; i += modifer) {
            const childEl = parentEl.children[i];
            if (attemptFocus(childEl) || this.focus(childEl, desc)) return true;
        }
        return false;
    }
}
