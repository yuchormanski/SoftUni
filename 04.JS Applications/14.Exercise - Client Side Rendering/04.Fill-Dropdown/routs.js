import { list } from "./generate.js"; 
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function router(){
    const response = await fetch(url);
    const data = Object.values(await response.json());
    list(data)
}

export async function newOption(option){

    try {
        if(option == ''){
            throw new Error('Please, add value')
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text:option})
        })
        try {
            if(!response.ok){
                throw new Error(response.message);
            }
            router()
        } catch (error) {
            alert(error.message)
        }
    } catch (error) {
        alert(error.message)
    }

}