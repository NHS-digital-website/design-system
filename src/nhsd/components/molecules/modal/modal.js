/* global document */

import nhsd from '@/nhsd';
import scrollbar from '@/helpers/scrollbar';
import FocusTrapper from '@/helpers/FocusTrapper';

function lockScrollBar() {
    // Check if modal is open
    const bodyEl = document.querySelector('body');
    if (document.querySelector('.nhsd-m-modal--open')) {
        if (bodyEl.classList.contains('nhsd-t-modal-open')) return;
        const scrollWidth = scrollbar.getWidth();
        bodyEl.style.paddingRight = `${scrollWidth}px`;
        bodyEl.classList.add('nhsd-t-modal-open');
    } else {
        bodyEl.classList.remove('nhsd-t-modal-open');
        bodyEl.style.paddingRight = '';
    }
}

export default class {
    componentId = null;

    componentEl = null;

    modalContainer = null;

    lastFocus = null;

    disableTrapping = false;

    constructor(componentEl) {
        if (!componentEl) return null;
        this.componentEl = componentEl;
        this.modalContainer = componentEl.querySelector('.nhsd-m-modal__container');

        if (this.componentEl.id) {
            this.componentId = this.componentEl.id;
        }

        this.focusTrapper = new FocusTrapper(this.modalContainer);
        this.bindEvents();
        this.focusModal();
    }

    focusModal() {
        if (this.componentEl.classList.contains('nhsd-m-modal--open')) {
            this.focusTrapper.focus(this.modalContainer);
        }
    }

    bindEvents() {
        nhsd(this.componentEl).on('modal-open.modal', () => {
            this.componentEl.classList.add('nhsd-m-modal--open');
            lockScrollBar();
            this.focusModal();
        });

        nhsd(this.componentEl).on('modal-close.modal', () => {
            this.componentEl.classList.remove('nhsd-m-modal--open');
            lockScrollBar();
        });

        const openButtons = Array.from(document.querySelectorAll(`[data-modal-open="${this.componentId}"]`));
        nhsd(openButtons).on('click', () => nhsd(this.componentEl).trigger('modal-open'));

        const closeButtons = Array.from(this.modalContainer.querySelectorAll('[data-modal-close]'));
        nhsd(closeButtons).on('click.modal', () => nhsd(this.componentEl).trigger('modal-close'));

        // Only bind these close events if the modal isn't mandatory
        if (this.componentEl.dataset.modalMandatory === undefined) {
            nhsd.on('keyup.modal', (e) => {
                if (e.key === 'Escape') {
                    nhsd(this.componentEl).trigger('modal-close');
                }
            });

            nhsd(this.componentEl).on('click.modal', (e) => {
                if (!this.modalContainer.contains(e.target)) nhsd(this.componentEl).trigger('modal-close');
            });
        }
    }
}
