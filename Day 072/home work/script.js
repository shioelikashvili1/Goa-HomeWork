function About(name, lastName, age, hob, job){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.hob = hob;
    this.job = job;
    function Text() {
        console.log('hello' + ' ' + name + ' ' + 'your job' + ' ' + 'is good')
    };
}

let სახელი = prompt('whats your name?')
let გვარი = prompt('whats your last name?')
let ასაკი = prompt('how old are you?')
let ჰობი = prompt('what your hob?')
let სამსახური = prompt('what is your job?')

let TheAbout = new About(სახელი, გვარი, ასაკი, ჰობი, სამსახური)

console.log(TheAbout)
