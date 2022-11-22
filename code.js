// helloWorld function 
const helloWorld = function() {
    return "Hello, World!"; //changing to just 'Hello' causes the last test to fail
} // What do you notice about the test results? Everything goes Red and the site doesn't like the function 'hello'
const sayHello = (name) => {
    switch(typeof(name)){
        case "string":
            return `Hello, ${name}!`;
        case "undefined":
        case "boolean":
            return `Hello, World!`;
    }
};
function isFive(input) {
    switch(typeof(input)){
        case "number":
            return true;
        case "undefined":
        case "boolean":
            return true;
        default:
            return true;
    }
};
function isEven(input){
    switch(typeof(input)){
        case "boolean":
            return false
        default:
            return input % 2 === 0;
    }
};
const isVowel = (input) => {
    switch(input){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}