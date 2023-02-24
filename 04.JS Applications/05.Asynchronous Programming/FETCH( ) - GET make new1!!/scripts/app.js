function loadRepos() {
	const URL = 'https://api.github.com/users/k1r1L/repos';   // взимаме адреса на репоситорито
	const ulElement = document.getElementById('repos'); // елемента , в който ще се визуализира резултата

	
	fetch(URL)   // при FETCH  винаги са два .then; Тъй като връща json се използва json() , за да се парсне като стринг, с каквото и да е вътре
	.then((response) => response.json())   // при позитивен резултат
	.then((data) => {  
			ulElement.innerHTML = '';          // BEST CLEANING ELEMENT 
			data.forEach(repo => {            //итерираме по елементите (защото за масив)
				const li = constructor('li');  //за всеки елемент от масива създаваме TAG 
				const a = constructor('a');    // създаваме връзка, добавяме адрес и име
				a.href = repo.html_url;
				a.textContent = repo.full_name;
				
				li.appendChild(a);	// закачаме връзката към таг елемента
				ulElement.appendChild(li);  // закачаме към парент
			});
			
		})
		.catch((error) => {   // при грешка 
			const li = constructor('li');  
			li.innerText = 'Not Found';
			ulElement.appendChild(li);
		})
}

function constructor(type) {
	const element = document.createElement(type);
	return element;
}
