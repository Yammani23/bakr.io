function hasBread(testString) {
    var hasBread = false
    const breadTypes = [
        "sourdough",
        "ciabatta",
        "rye",
        "bread"
    ]
    const splitString = testString.split(" ")
    for (var item in splitString) {

        if (breadTypes.indexOf(splitString[item].toLowerCase()) >-1) {
            hasBread = true
        }

    }

    if (hasBread == true) {
        console.log(testString, " :It has bread!")
    }
    else {
        console.log(testString, " :It does not have bread")
    }
}

hasBread("Hi, I am Yammani")
hasBread("I like rye bread")
hasBread("I like rice")
hasBread("I like rye")
hasBread("sourdough rye")
hasBread("")
hasBread("hi")







