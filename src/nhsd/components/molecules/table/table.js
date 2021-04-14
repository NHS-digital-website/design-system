/* global document */
import nhsd from '@/nhsd';

const chevrons = {
    asc: '<path d="M8,4l7,6.5L13.5,12L8,6.8L2.5,12L1,10.5L8,4z"/>',
    desc: '<path d="M8,12L1,5.5L2.5,4L8,9.2L13.5,4L15,5.5L8,12z"/>',
};

function getChevronIcon(direction = 'asc') {
    return `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="100%" height="100%">
${chevrons[direction]}
</svg>`;
}

// https://stackoverflow.com/a/4340339
function sortAlphaNum(a, b) {
  const reA = /[^a-zA-Z]/g;
  const reN = /[^0-9]/g;
  const aA = a.replace(reA, '');
  const bA = b.replace(reA, '');
  if (aA === bA) {
    const aN = parseInt(a.replace(reN, ''), 10);
    const bN = parseInt(b.replace(reN, ''), 10);
    if (aN === bN) return 0;
    return aN > bN ? 1 : -1;
  }
  return aA > bA ? 1 : -1;
}

function reorderTable(orderedColumn, table, direction = 'asc') {
    const tableBodys = table.querySelectorAll('tbody');
    Array.from(tableBodys).forEach((tableBody) => {
        const cellValues = [];
        const rows = tableBody.querySelectorAll('tr');
        Array.from(rows).forEach((row, index) => {
            const cell = row.querySelectorAll('td, th')[orderedColumn];
            if (!cell) return;
            cellValues.push({
                row: index,
                value: cell.innerText,
            });
        });
        cellValues.sort((a, b) => {
            const result = sortAlphaNum(a.value, b.value);
            if (direction === 'asc') return result;
            return result * -1;
        });
        tableBody.innerHTML = '';
        cellValues.forEach((cellValue) => {
            tableBody.append(rows[cellValue.row]);
        });
    });
}

function addListeners(thisHeading, index, table) {
    const thisButton = thisHeading.querySelector('button');
    if (!thisButton) return;

    nhsd.event(thisButton).on('click', () => {
        const headings = table.querySelectorAll('thead td,th');
        Array.from(headings).forEach((heading) => {
            const icon = heading.querySelector('.nhsd-a-icon');
            if (!icon) return;

            if (heading === thisHeading) {
                thisHeading.dataset.sort = thisHeading.dataset.sort === 'asc' ? 'desc' : 'asc';
                icon.innerHTML = getChevronIcon(thisHeading.dataset.sort);
            } else {
                heading.dataset.sort = '';
                icon.innerHTML = getChevronIcon('asc');
            }
        });

        reorderTable(index, table, thisHeading.dataset.sort);
    });
}

function makeOrderable(table) {
    if (table.dataset.noSort !== undefined) return;

    const tableHeaders = table.querySelectorAll('thead td,th');
    Array.from(tableHeaders).forEach((header, index) => {
        if (header.dataset.noSort !== undefined) return;

        header.classList.add('nhsd-m-table__orderable-col');

        const sortIcon = `<span class="nhsd-a-icon nhsd-a-icon--size-xs">${getChevronIcon('asc')}</span>`;

        if (index) {
            header.innerHTML = `<button><span>${sortIcon}${header.innerHTML}</span></button>`;
        } else {
            header.innerHTML = `<button><span>${header.innerHTML}${sortIcon}</span></button>`;
        }

        addListeners(header, index, table);
    });
}

function makeResponsive(table) {
    if (table.dataset.responsive === undefined) return;
    table.classList.add('nhsd-!t-display-hide');
    table.classList.add('nhsd-!t-display-s-show-table');

    const tableHeader = table.querySelector('thead tr');
    const tableHeadings = tableHeader.querySelectorAll('td, th');
    const tableBodys = table.querySelectorAll('tbody');

    let listElHtml = '<ul class="nhsd-!t-display-s-hide">';

    Array.from(tableBodys).forEach((tableBody) => {
      const hightlighed = tableBody.classList.contains('nhsd-m-table__highlighted-items');

      const tableRows = tableBody.querySelectorAll('tr');

      Array.from(tableRows).forEach((tableRow) => {
        listElHtml += '<li>';
        if (hightlighed) {
            listElHtml += '<ul class="nhsd-m-table__mobile-list-item nhsd-m-table__mobile-list-item--highlighted">';
        } else {
            listElHtml += '<ul class="nhsd-m-table__mobile-list-item">';
        }
        const tableCells = tableRow.querySelectorAll('td, th');
        Array.from(tableCells).forEach((tableCell, index) => {
          listElHtml += '<li><span><b>';
          if (tableHeadings[index]) {
            listElHtml += tableHeadings[index].innerText;
          }
          listElHtml += `</b></span><span>${tableCell.innerHTML}</span>`;
          listElHtml += '</li>';
        });
        listElHtml += '</ul></li>';
      });
    });

    listElHtml += '</ul>';

    const listEl = document.createElement('div');
    listEl.classList.add('nhsd-m-table__mobile-list');
    listEl.innerHTML = listElHtml;

    table.parentNode.insertBefore(listEl, table.nextSibling);
}

export default function NHSDTable(componentEl) {
    const tables = componentEl.querySelectorAll('table');
    if (tables.length === 0) return null;

    Array.from(tables).forEach((table) => {
        makeResponsive(table);
        makeOrderable(table);
    });
}
