function levels(currentOption) {
    const availableOptions = [
        { key: 'PC', label: 'PC', selected: false },
        { key: 'Nintendo', label: 'Nintendo', selected: false },
        { key: 'PS4', label: 'PS4', selected: false },
        { key: 'PS5', label: 'PS5', selected: false },
        { key: 'XBOX', label: 'XBOX', selected: false },
    ]
    const result = availableOptions.map(x => x.key == currentOption ? { ...x, selected: true } : x);
    return result;
}

module.exports = levels;
