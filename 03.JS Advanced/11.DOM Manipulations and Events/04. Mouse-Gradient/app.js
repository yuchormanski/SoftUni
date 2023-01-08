function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let result = document.getElementById('result');

    let gradientHandler = (e) => {
        //to find event methods console.log(e)
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        console.log(e);
        result.textContent = `${percent}%`;
    }
    gradientElement.addEventListener('mousemove', gradientHandler);
}

