/* 4.	Browser History
As input, you will receive two parameters: an object and a string array.
The object will be in format: 
                            {Browser Name}:{Name of the browser}, 
                            Open tabs:[…], 
                            Recently Closed: […],
                            Browser Logs: […]. 
 Your task is to fill in the object based on the actions we will get in the array of strings.
You can open any site in the world as many times as you like; if you do that add it to the open tabs.
You can close only these tabs you have opened already! If the current action contains a valid opened site, 
you should remove it from "Open Tabs" and put it into "Recently closed", otherwise don't do anything!
Browser Logs will hold every single Valid action, which you did (Open and Close).
There is a special case in which you can get an action that says: "Clear History and Cache". 
That means you should empty the whole object.

In the end, print the object in the format:
{Browser name}
Open Tabs: {[…]} // Joined by comma and space
Recently Closed: {[…]} // Joined by comma and space
Browser Logs: {[…]} // Joined by comma and space */


function browserHistory(input, commands) {
    let browserLog = input;
    for (let command of commands) {

        let action = command.split(' ').shift();
        let site = command.split(' ').slice(1).join(' ');
        //IF Close
        if (action === 'Close') {
            for (let opened of browserLog["Open Tabs"]) {
                if (opened === site) {
                    let index = browserLog["Open Tabs"].indexOf(opened);
                    browserLog["Open Tabs"].splice(index, 1);
                    browserLog["Recently Closed"].push(opened)
                    browserLog["Browser Logs"].push(command);
                    break;
                }
            }
        } // IF Open
        else if (action === 'Open') {
            browserLog["Open Tabs"].push(site);
            browserLog["Browser Logs"].push(command);
        }
        // IF Clear cash
        else if (action === 'Clear') {
            browserLog["Open Tabs"] = [];
            browserLog["Recently Closed"] = [];
            browserLog["Browser Logs"] = [];

        }
    }
    console.log(browserLog["Browser Name"]);
    console.log(`Open Tabs: ${browserLog["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browserLog["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browserLog["Browser Logs"].join(', ')}`);
}
browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])

// browserHistory({"Browser Name":"Mozilla Firefox",
//                 "Open Tabs":["YouTube"],
//                 "Recently Closed":["Gmail", "Dropbox"],
//                 "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
//                 ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])