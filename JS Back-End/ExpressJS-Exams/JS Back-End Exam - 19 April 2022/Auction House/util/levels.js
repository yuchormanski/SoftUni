function levels(currentLevel) {
    const difficultyLevels = [
        { key: 'estate', label: 'Real Estate', selected: false },
        { key: 'vehicles', label: 'Vehicles', selected: false },
        { key: 'furniture', label: 'Furniture', selected: false },
        { key: 'electronics', label: 'Electronics', selected: false },
        { key: 'other', label: 'Other', selected: false },
    ]
    const result = difficultyLevels.map(x => x.label == currentLevel ? { ...x, selected: true } : x);
    return result;
}

function categories(cat) {
    let category;
    if (cat == 'estate') { category = 'Real Estate' }
    else if (cat == 'vehicles') { category = 'Vehiclese' }
    else if (cat == 'furniture') { category = 'Furniture' }
    else if (cat == 'electronics') { category = 'Electronics' }
    else if (cat == 'other') { category = 'Other' }
    return category;
}

module.exports = { levels, categories };
