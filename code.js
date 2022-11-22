// helloWorld function 
const helloWorld = function() {
    return "Hello, World!"; //changing to just 'Hello' causes the last test to fail
} // What do you notice about the test results? Everything goes Red and the site doesn't like the function 'hello'
const sayHello = (name) =>  `Hello, ${name}!`; //cut out 'name==="Alex" ? 'Hello, Alex!' : name==='Pat' ? `Hello, Pat!` : `Hello, ${name}!`;
