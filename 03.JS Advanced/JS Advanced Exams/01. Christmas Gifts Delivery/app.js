function solution() {
    const giftsArray = [];
    const sections = Array.from(document.querySelectorAll('section.card'));
    const giftButton = sections[0].querySelector('button');
    const giftInput = sections[0].querySelector('input');
    const giftsPanel = sections[1].querySelector('ul');
    const sentGifts = sections[2].querySelector('ul');
    const discardedGifts = sections[3].querySelector('ul');

    giftButton.addEventListener('click', addToList);

    function addToList(e) {
        e.preventDefault();
        if (giftInput.value === '') return;
        const giftsList = Array.from(sections[1].querySelectorAll('ul li'));
        let current = giftInput.value;
        giftsArray.push(current);
        giftsArray.sort((a, b) => a.localeCompare(b));

        const sendBtn = creator('button', '', 'Send');
        sendBtn.id = 'sendButton';
        const discardBtn = creator('button', '', 'Discard');
        discardBtn.id = 'discardButton'

        if (giftsList.length > 0) {
            giftsList.forEach(li => li.remove());
        }

        for (let gift of giftsArray) {
            const element = creator('li', 'gift', gift);
            let cloneSendBtn = sendBtn.cloneNode(true);
            cloneSendBtn.addEventListener('click', sent);
            element.appendChild(cloneSendBtn);
            let cloneDiscardBtn = discardBtn.cloneNode(true);
            cloneDiscardBtn.addEventListener('click', discard);
            element.appendChild(cloneDiscardBtn);
            giftsPanel.appendChild(element);
        }
        giftInput.value = '';

        function sent(e) {
            let el = e.target.parentElement;
            const buttons = Array.from(el.querySelectorAll('button'));
            buttons.forEach(b => b.remove());
            sentGifts.appendChild(el);
        }
        function discard(e) {
            let el = e.target.parentElement;
            const buttons = Array.from(el.querySelectorAll('button'));
            buttons.forEach(b => b.remove());
            discardedGifts.appendChild(el);
        }

    }

    function creator(type, hasClass, text) {
        const element = document.createElement(type);
        if (hasClass) { element.className = hasClass; };
        if (text) { element.innerText = text; };
        return element;
    }
}