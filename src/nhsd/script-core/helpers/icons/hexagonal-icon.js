function hexOutline(svgData) {
    return `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16">
        <path d="M8,16l-6.9-4V4L8,0l6.9,4v8L8,16z M2,11.5L8,15l6-3.5v-7L8,1L2,4.5V11.5z"></path>
        <g>${svgData}</g>
    </svg>`;
}

module.exports = function nestSVG(svgData) {
    const svgStartPos = svgData.indexOf('<svg');
    const svgEndPos = svgData.indexOf('>', svgStartPos);

    const svgStart = svgData.substr(0, svgStartPos + 4);
    const svgEnd = svgData.substr(svgEndPos);

    const nestedSvgAttrs = 'xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="42%" height="42%" x="29%" y="29%"';

    const svgAttrs = `${svgStart} ${nestedSvgAttrs} ${svgEnd}`;

    return hexOutline(svgAttrs);
};
