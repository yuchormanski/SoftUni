



export function sheet(d) {
    const section = creator('section', 'className', 'monthCalendar', '');
    const table = creator('table', '', '', '');
    const tBody = creator('tbody', '', '', '');
    const headTr = creator('tr', 'className', 'calendar months custom', d);
    tBody.appendChild(headTr);
    for (let i = 0; i <= 12; i++) {
        const tr = creator('tr', '', '', '');
        const td = creator('td', 'className', 'tdText', '')
        const input = creator('input', 'className', 'inputText', '')
        input.placeholder = `${i * 2}: 00`;
        td.appendChild(input)
        tr.appendChild(td)
        tBody.appendChild(tr);
    }

    table.appendChild(tBody);
    section.appendChild(table);
    return section;
}










function creator(elType, elAttribute, attrValue, elementText) {
    const element = document.createElement(elType);
    elAttribute ? element[elAttribute] = attrValue : null;
    elementText ? element.innerText = elementText : null;
    return element;
}

/* 
        <section id="years" class="yearsCalendar">
            <table class="calendar">
                <caption>2020 - 2023</caption>
                <tr class="months">
                    <th class="month" colspan="4"></th>
                </tr>
    
                <tr class="days">
                    <td class="day">
                        <div class="date">2020</div>
                    </td>
                    <td class="day">
                        <div class="date">2021</div>
                    </td>
                </tr>
    
                <tr class="days">
                    <td class="day">
                        <div class="date">2022</div>
                    </td>
                    <td class="day">
                        <div class="date">2023</div>
                    </td>
                </tr>
    
            </table>
        </section>
*/