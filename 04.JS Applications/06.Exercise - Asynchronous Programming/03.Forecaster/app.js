function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const userLocation = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    submitBtn.addEventListener('click', getLocation);

    const symbols = {
        'Sunny': '☀',        // ☀
        'Partly sunny': '⛅', // ⛅
        'Overcast': '☁',     // ☁
        'Rain': '☂',         // ☂
    }
    let deg = '°';

    let currentObj = {};

    function getLocation() {
        current.innerHTML = '';
        upcoming.innerHTML = '';
        const forecastDiv = creator('div', 'className', 'forecast', '');
        forecastElement.style.display = 'block';

        fetch(`${baseURL}`)
            .then((res) => res.json())
            .then((data) => {
                const found = data.find(el => el.name === userLocation.value);
                currentObj = Object.assign(found);
                today();
                upcomingDays();
            })
            .catch((error) => {
                forecastDiv.innerText = 'Error'
                current.appendChild(forecastDiv);
                console.log(error);
            });

        function today() {
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentObj.code}`)
                .then((res) => res.json())
                .then((currentData) => {
                    let cond = currentData.forecast.condition;
                    let low = currentData.forecast.low;
                    let high = currentData.forecast.high;
                    forecastDiv.appendChild(creator('span', 'className', 'condition symbol', `${symbols[cond]}`));
                    const span = creator('span', 'className', 'condition', '');
                    span.appendChild(creator('span', 'className', 'forecast-data', `${currentData.name}`));
                    span.appendChild(creator('span', 'className', 'forecast-data', `${low}${deg}/${high}${deg}`));
                    span.appendChild(creator('span', 'className', 'forecast-data', `${cond}`));
                    forecastDiv.appendChild(span);
                    current.appendChild(forecastDiv);
                })
                .catch(error => console.log(error));
        }

        function upcomingDays() {
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentObj.code}`)
                .then((res) => res.json())
                .then((threeDays) => {
                    const forecastInfoDiv = creator('div', 'className', 'forecast-info', '');
                    threeDays.forecast.forEach(day => {
                        let low = day.low;
                        let high = day.high;
                        let cond = day.condition;
                        const span = creator('span', 'className', 'upcoming', '');
                        span.appendChild(creator('span', 'className', 'symbol', `${symbols[cond]}`));
                        span.appendChild(creator('span', 'className', 'forecast-data', `${low}${deg}/${high}${deg}`));
                        span.appendChild(creator('span', 'className', 'forecast-data', `${cond}`));
                        forecastInfoDiv.appendChild(span);
                    });
                    upcoming.appendChild(forecastInfoDiv);
                })
                .catch(error => console.log(error));
        }
    }

    function creator(elType, elAttribute, attrValue, elementText) {
        const element = document.createElement(elType);
        elAttribute ? element[elAttribute] = attrValue : null;
        elementText ? element.innerText = elementText : null;
        return element;
    }
}

attachEvents();