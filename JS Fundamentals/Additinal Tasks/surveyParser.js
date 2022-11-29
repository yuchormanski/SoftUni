function surveyParser(data) {
    let generalPattern = /<(svg)>+(.+)\1>/gm;
    let labelPattern = /<cat><text>.+\[(?<label>.+)\]<\/text><\/cat>/gm;
    let valueRatingPattern = /<g><val>(?<value>[0-9]+)<\/val>(?<count>[0-9]+)<\/g>/gm;
    let vrArray = [];
    let label;
    if (data.match(generalPattern)) {

        if (data.match(labelPattern)) {
            label = labelPattern.exec(data)[1];
        } else {
            console.log('Invalid format');
            return;
        }
        let valueRating = valueRatingPattern.exec(data);
        while (valueRating !== null) {
            let value = valueRating.groups['value'];
            let count = valueRating.groups['count'];
            vrArray.push([count, value]);
            valueRating = valueRatingPattern.exec(data);
        }
    } else {
        console.log('No survey found');
        return;
    }

    let totalRating = 0;
    let totalCount = 0;

    for (let el of vrArray) {
        totalRating += Number(el[0]) * Number(el[1]);
        totalCount += Number(el[0]);
    }
    let avgRating = (totalRating / totalCount).toFixed(2);
    console.log(`${label}: ${avgRating}`);
}
surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');

// surveyParser('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');

// surveyParser("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>");

// surveyParser("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>");