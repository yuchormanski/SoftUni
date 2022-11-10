/* Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, 
as template.bak should be the file name, while pptx is the extension). */

function extractFile(path) {
    let pathArray = path.split('\\');
    let filename = pathArray.pop().split('.');
    let extension = filename.pop();
    console.log(`File name: ${filename.join('.')}`);
    console.log(`File extension: ${extension}`);
}
extractFile(
    'C:\\Internal\\training-internal\\Template.back.pptx'
);