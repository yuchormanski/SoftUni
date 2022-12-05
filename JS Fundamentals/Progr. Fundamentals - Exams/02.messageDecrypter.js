/* Message Decrypter
Create a program that checks if inputs have a valid message and decrypt it. On the first line, 
you will receive a number that indicates how many inputs you will receive on the following lines.
A message is valid when:
• There is nothing else before and after it
It starts with a tag, which is surrounded by either "$" or "%" (but not both at the same time). 
The tag itself has to be minimum 3 characters long, start with an uppercase letter, followed only by lowercase letters
There is a colon and a single white space after the tag
There are 3 groups consisting of numbers between
and "]", followed by a pipe ("|")
Example for a valid message:
"$Requests: [73]|[115]|[32]|"
You must check if the message is valid, and if it is - decrypts it. If it isn't - print the following message:
"Valid message not found!"
Decrypting a message means taking all numbers and turn them into ASCII symbols. After successful decrypt, 
print it in the following format:
"{tag}: {decryptedMessage}"
Input
• On the first line - n - the count of inputs.
Output
On the next n lines - input that you have to check if it has a valid message.
• Print all results from each input, each on a new line. */




function messageDecrypter(){

}
messageDecrypter()