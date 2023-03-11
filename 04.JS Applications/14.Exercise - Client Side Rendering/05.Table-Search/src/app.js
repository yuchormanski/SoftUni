import { getTableData } from "./router.js";
import { searchCriteria } from "./search.js";

export const table = document.querySelector('.container tbody');
export const inputField = document.getElementById('searchField');

getTableData()
solve()


function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      const rows = [...table.querySelectorAll('tr')];
      try {
         if (inputField.value == '') {
            const error = 'Missing search criteria!'
            throw new Error(error)
         }
         rows.forEach(row => row.className = '');
         searchCriteria(inputField.value.trim())
      } catch (error) {
         alert(error.message)
      }

   }
}