function solution() {

    const sections = Array.from(document.querySelectorAll('section.card'));
    const listSection = sections[1].querySelector('ul');
    const sentSection = sections[2].querySelector('ul');
    const discardSection = sections[3].querySelector('ul');
    const giftInput = sections[0].querySelector('input');
    const addGiftBtn = sections[0].querySelector('button');
    const giftArray = [];
    addGiftBtn.addEventListener('click', listGifts);

    function listGifts() {
        const gift = giftInput.value;

        const li = creator('li', 'class', 'gift', gift);
        li.addEventListener('click', distributor);
        li.appendChild(creator('button', 'id', 'sendButton', 'Send'));
        li.appendChild(creator('button', 'id', 'discardButton', 'Discard'));
        giftArray.push(li);
        giftArray.sort((a, b) => a.innerText.localeCompare(b.innerText))
            .forEach(li => listSection.appendChild(li));

        giftInput.value = '';

        function distributor(e) {
            if (e.target.tagName = 'BUTTON') {
                const index = giftArray.indexOf(li);
                giftArray.splice(index, 1);
                li.remove();
                if (e.target.id == 'sendButton') {
                    sentGift(gift);
                } else if (e.target.id == 'discardButton') {
                    discardGift(gift);
                }
            }
        }

        function sentGift(gift) {
            sentSection.appendChild(creator('li', 'class', 'gift', gift));
        }

        function discardGift(gift) {
            discardSection.appendChild(creator('li', 'class', 'gift', gift));
        }
    }

    function creator(type, attribute, attrValue, textCont) {
        const element = document.createElement(type);
        if (attribute != '') {
            element[attribute] = attrValue;
        }
        if (textCont != '') {
            element.innerText = textCont;
        }
        return element;
    }
}