function charInRange(first, second) {
    let rangeStart = Math.min(first.charCodeAt(),second.charCodeAt());
    let rangeEnd = Math.max(first.charCodeAt(),second.charCodeAt());
    
    let result = '';
    for (let i = rangeStart + 1; i < rangeEnd; i++) {
        result += `${String.fromCharCode(i)} `
        
    }
        console.log(result);
}
charInRange('#', ':')