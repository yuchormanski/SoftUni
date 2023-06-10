function parseError(error) {
    if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(x => x.message)
    } else {
        return error.message.split('\n');
    }
}


function levels(currentLevel) {
    const difficultyLevels = [
        { key: 'crypto-wallet', label: 'Crypto Wallet', selected: false },
        { key: 'credit-card', label: 'Credit Card', selected: false },
        { key: 'debit-card', label: 'Debit Card', selected: false },
        { key: 'paypal', label: 'PayPal', selected: false },
    ]
    const result = difficultyLevels.map(x => x.key == currentLevel ? { ...x, selected: true } : x);
    return result;
}




module.exports = {
    parseError,
    levels
}