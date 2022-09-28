/* 1.	Blank Receipt
Create a method that prints a blank cash receipt. The method should invoke three other 
methods: one for printing the header, one for the body and one for the footer of the receipt. 

The header should contain the following text:	CASH RECEIPT
                                                ------------------------------

The body should contain the following   text:	Charged to____________________
                                                Received by___________________

And the text for the footer:	                ------------------------------
                                                © SoftUni

Output:
CASH RECEIPT
------------------------------
Charged to____________________
Received by___________________
------------------------------
© SoftUni
 */


function blankReceipt() {
    console.log(`CASH RECEIPT\n------------------------------`);
    console.log(`Charged to____________________\nReceived by___________________`);
    console.log(`------------------------------\n© SoftUni`);
}
blankReceipt()