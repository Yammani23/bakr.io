# Bakr.io
This is a personal project by Yammani Shah

## Description
This is a web appliaction using the express web framework. Users can either type in a sentence or upload a file with sentences to test for specific bread words. The app by default checks for the following bread names:

  `bread, rye, ciabatta, sourdough`
  
Alternatively users can specify the bread names to search for.

## Running the code
* Clone the repository
  * `git clone https://github.com/Yammani23/bakr.io.git`
* Change into bakr.io directory
  * `cd bakr.io`
* Install npm packages
  * `npm install`
* Run dev server
  * `npm run dev`

## Npm Setup Instructions
- [NodeJS installation](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
- [Express installation](https://www.npmjs.com/package/express)
- [Express File upload](https://www.npmjs.com/package/express-fileupload)
- [Pug installation](https://www.npmjs.com/package/pug)


## Intro to Node
Node is a server side JavaSrcipt runtime engine. It is used to run JS code outside of the browser. Node packages can be installed using the Node package manger called `npm`. Different node versions can be installed using the Node version manager, `nvm`.

# References

## Linux Commands

- go back in directory
 ` cd ..`
 
- make directory
 `mkdir <dir_name>`

- change directory to ...
`cd <folder name>`

- list all in directory
`ls`

- show location of program
`which`

- pathway directory
`pwd`

- search path for 'git' an dopens main branc
`which git`

- walks through creating the packet manager, package.json file
`npm init`

- begin coding
`code .`


- node src ... 
`run`

## Git Commands
- make clone of repo
`git clone`


- pull latest changes
`git pull`

- Check for changes
`git status`

- creates new branch from main branch 
`git checkout -b <branch_name>`

- switch branches
`git checkout <branch_name>`


- list local branches
`git branch -l`

- list remote branches
`git branch -r `

- list all changes/updates to main
`git log `


## JS

### Data Types:

- Boolean
    - `true/false, 1/0`
- Integers
    - `1, 5 10, 342`
- Floats
    - `3.14, 2.1, 0.000018`
- String
    - `“Hello”, ‘Hello’`
- List/Array of data types
    - `Always starts at index 0, and has finite length`
    - `[1, 2, 3, 4]`
    - `[”Hi”, “Mama”]`
    - `[3.14, 2.88]`
    - `[true, false, false]`
    - `access element by array_name[index_number]`
- Dictionary/map/object
    - `key value pairs`
    - `define a map using {}`
    - `{”key_name”: “value”, “key_name2” : ”value2”}`
        - `[{”first_name”: “Yammani”, “last_name”: “Shah”}, {”first_name”: “Aditya”, “last_name”: “Sah”}, {”first_name”: “Sunny”, “last_name”: “Shah”}]`
    - `Access element by dictionary_name[”key_name”]`
    

### Syntax:

- Functions definitions
    ```jsx
    function function_name(parameter1, parameter2){
    	//function body
    	
    }
    `````
    
- Branches
    - if/else
    
    ```jsx
    if (test_condition){
    	//code block
    } else{
    	//code block
    } 
    ```
    
    - if
    
    ```jsx
    if (test_condition){
    	//code block
    }
    ```
    
- Loops
    - For Loop
    
    ```jsx
    const my_list = ["Yammani", "Murari", "Sunny"]
    for (var i = 0; i < my_list.length; i++) {
    	console.log(my_list[i])
    }
    
    for (var item in my_list){
    	console.log(item)
    }
    ```
    
    - While Loop
    
    ```jsx
    while (var i < test_condition){
    	//code block
    }
    ```

