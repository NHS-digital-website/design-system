/* global window */

const easeOutQuad = (t) => t * (2 - t);

const formatNo = (number, decimals = 0) => Number(number).toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
});

export default function NHSDStatistics(componentEl) {
    const elementsToAnimate = componentEl.querySelectorAll('[data-animate-statistic]');

    elementsToAnimate.forEach((elToAnimate) => {
        const { animateStatistic } = elToAnimate.dataset;

        let animationDuration = 2000;
        if (animateStatistic && parseInt(animateStatistic, 10)) {
            animationDuration = parseInt(animateStatistic, 10);
        }

        let originalValue = elToAnimate.innerHTML;
        originalValue = originalValue.replace(/[^0-9.]/g, '');

        let noDecimals = 0;
        if (originalValue.indexOf('.') > 0) {
            noDecimals = originalValue.length - originalValue.indexOf('.') - 1;
        }

        elToAnimate.innerHTML = formatNo(0, noDecimals);

        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(animationDuration / frameDuration);

        let frame = 0;
        const interval = setInterval(() => window.requestAnimationFrame(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);

            elToAnimate.innerHTML = formatNo(originalValue * progress, noDecimals);
            if (progress >= 1) {
                clearInterval(interval);
            }
        }), frameDuration);
    });
}
