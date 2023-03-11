import { createTable } from "./tableTemplate.js";

const url = 'http://localhost:3030/jsonstore/advanced/table';

export async function getTableData() {
    const response = await fetch(url);
    const data = Object.values(await response.json());
    console.log(data);
    createTable(data)
}

