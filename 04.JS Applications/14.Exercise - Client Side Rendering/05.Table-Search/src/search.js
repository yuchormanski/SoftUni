import { inputField, table } from "./app.js";

export function searchCriteria(data) {
    const searched = data.toLowerCase();
    const rows = [...table.querySelectorAll('tr')];

    const res = rows.filter(row => row.textContent.toLowerCase().includes(searched));

    try {
        if (res == undefined) {
            const error = 'Nothing found!'
            throw new Error(error);
        }

        inputField.value = '';
        res.forEach(founded => founded.className = 'select');

    } catch (error) {
        alert(error.message)
    }
}
