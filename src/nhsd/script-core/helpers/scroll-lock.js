/* global document */

export default function (enabled = true, mobile = false) {
    let lockClass = 'nhsd-t-scroll-lock';
    if (mobile) {
        lockClass = 'nhsd-t-scroll-lock-mobile';
    }

    const lockableElements = document.querySelectorAll('html, body');
    if (enabled) {
        lockableElements.forEach((element) => element.classList.add(lockClass));
    } else {
        lockableElements.forEach((element) => element.classList.remove(lockClass));
    }
}
