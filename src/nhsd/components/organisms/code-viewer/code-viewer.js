/* global document navigator */

import nhsd from '@/nhsd';

let timeout = null;
let labelToChange = null;
function triggerLabelChange(buttonLabel) {
    // Cancel previous
    if (timeout) clearTimeout(timeout);
    if (labelToChange) labelToChange.innerText = 'Copy';

    labelToChange = buttonLabel;
    labelToChange.innerText = 'Copied';
    timeout = setTimeout(() => {
        labelToChange.innerText = 'Copy';
    }, 5000);
}

function copyElementText(element) {
    const textToCopy = element.innerText;
    navigator.clipboard.writeText(textToCopy);
}

function copyCode(codeElement) {
    const code = codeElement.querySelector('.nhsd-o-code-viewer__code-content');
    copyElementText(code);

    const buttonLabel = codeElement.querySelector('.nhsd-a-button__label');
    if (!buttonLabel) return;

    triggerLabelChange(buttonLabel);
}

function createCopyButton(codeElement) {
    if (codeElement.querySelector('.nhsd-o-code-viewer__copy-code')) return;

    const copyElement = document.createElement('div');
    copyElement.classList.add('nhsd-o-code-viewer__copy-code');
    copyElement.setAttribute('aria-live', 'polite');
    copyElement.innerHTML = '<button class="nhsd-a-button nhsd-a-button--invert"><span class="nhsd-a-button__label">Copy</span></button>';
    codeElement.insertBefore(copyElement, codeElement.firstChild);
    const copyButton = copyElement.querySelector('button');
    if (!copyButton) return;

    nhsd(copyButton).on('click', () => copyCode(codeElement));
}

export default function NHSDCodeViewer(componentEl) {
    Array.from(componentEl.querySelectorAll('.nhsd-o-code-viewer__code')).forEach((codeEl) => createCopyButton(codeEl));
}
