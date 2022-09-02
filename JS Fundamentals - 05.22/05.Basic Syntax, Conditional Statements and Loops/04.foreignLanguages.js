function foreignLanguages(country) {
    country === 'USA' || country === 'England' ? console.log('English') :
        country === 'Spain' || country === 'Argentina' || country === 'Mexico' ? console.log(`Spanish`) : console.log(`unknown`);
}
foreignLanguages('Mexico')