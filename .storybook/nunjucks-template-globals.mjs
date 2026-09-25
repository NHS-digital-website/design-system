const icons = SVG_ICONS || {};

function hexOutline(svgData) {
  return `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16">
    <path d="M8,16l-6.9-4V4L8,0l6.9,4v8L8,16z M2,11.5L8,15l6-3.5v-7L8,1L2,4.5V11.5z"></path>
    <g>${svgData}</g>
  </svg>`;
}

function nestedIcon(svgData) {
  const svgStart = svgData.indexOf('<svg');
  const svgEnd = svgData.indexOf('>', svgStart);
  const svgStartTag = svgData.slice(0, svgStart + 4);
  const svgEndTag = svgData.slice(svgEnd);
  const nestedAttributes = 'xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="42%" height="42%" x="29%" y="29%"';

  return hexOutline(`${svgStartTag} ${nestedAttributes} ${svgEndTag}`);
}

export function svgIcon(id, nested = false) {
  return nested ? nestedIcon(icons[id]) : icons[id];
}
