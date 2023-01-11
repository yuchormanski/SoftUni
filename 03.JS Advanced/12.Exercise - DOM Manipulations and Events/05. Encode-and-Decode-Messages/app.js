function encodeAndDecodeMessages() {

    const divArray = Array.from(document.querySelectorAll('#main div'));  // get divs with input fields and buttons as Array

    const sendMessageButton = divArray[0].querySelector('button').addEventListener('click', addOne); // message send button
    const decodeReceivedButton = divArray[1].querySelector('button').addEventListener('click', subtractOne); // receiver button

    const messagePanel = divArray[0].querySelector('textarea'); // message panel
    const receiverPanel = divArray[1].querySelector('textarea'); // receiver


    function addOne() {
        const encoded = [...messagePanel.value];  // converting message to array
        encoded.forEach((c, i) => encoded[i] = String.fromCharCode(c.charCodeAt() + 1)); // add 1 to its ASCII code
        receiverPanel.value = encoded.join('');  // send it 
        messagePanel.value = ''; // clear panel
    }

    function subtractOne() {
        const decoded = [...receiverPanel.value];  // converting message to array
        decoded.forEach((c, i) => decoded[i] = String.fromCharCode(c.charCodeAt() - 1)); // subtract 1 from its ASCII code
        receiverPanel.value = decoded.join('');
    };
}

//The password for my bank account is 123pass321