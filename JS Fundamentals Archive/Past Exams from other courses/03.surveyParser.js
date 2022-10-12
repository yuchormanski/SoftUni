
function surveyParser(input) {
    const inputString = input;
    let svgStartIndex = 0;
    let svgEndIndex = 0;
    let catArray = []
    if(inputString.includes('<svg>')){
        svgStartIndex = inputString.indexOf('<svg>');
    }
    if(inputString.includes('</svg>')){
        svgEndIndex = inputString.indexOf('</svg>')+6;
    }
    let svg = inputString.slice(svgStartIndex,svgEndIndex);

    //IF no opening and closing svg tags
    if(svg.slice(0,5) !== '<svg>' && svg.slice(0,5) !== '</svg>'){
        console.log('No survey found');
        return;
    }



    console.log(svg);
}
surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>")

/* 
<p> Some random text</p>
<svg>
    <cat>
    <text>How do you rate our food? [Food - General]</text>
    </cat>

    <cat>
        <g><val>1</val>0</g>
        <g><val>2</val>1</g>
        <g><val>3</val>3</g>
        <g><val>4</val>10</g>
        <g><val>5</val>7</g>
    </cat>
</svg>
<p>Some more random text</p> 
*/