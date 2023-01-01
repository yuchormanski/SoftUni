function editElement(ref, match, replacer) {
    let regex = new RegExp(match, 'g');
    let text = ref.textContent.replace(regex, replacer);
    ref.textContent = text;
}