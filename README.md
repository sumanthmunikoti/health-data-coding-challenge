# 1upHealth Coding Challenge

This Node.js application displays the allergies of a patient when the firstname and lastname of the patient are entered as arguments on the command line

## Requirements

You will need Node.js, npm and a presto-client package

## Install

git clone https://github.com/YOUR_USERNAME/health-data-coding-challenge.git

Please check package.json file. "presto-client": "^0.7.0" has already been added as a dependency.
If not found, run the following command

npm install -g presto-client (for a global installation)

OR

add presto-client to your own packagen.json, and do npm install


### How to run

Open the command line terminal
Navigate to your project

Run the following command:
$ node App.js  firstName lastName

Example:
$ node App.js  Marshall526 Zboncak558

The output is displayed as follows:
| Code | Description |
|------|-------------|
|424213003 | Allergy to bee venom|
|419474003 | Allergy to mould|
|91935009 |Allergy to peanuts|






