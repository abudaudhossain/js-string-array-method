const myString =`Abu Daud Hossain.I am a Professional Web Designer and Developer.
I am an Expert in HTML, CSS, Bootstrap, SASS,Javascript, Jquery, PHP, MySql, WordPress.
I'm here to serve all the people who need aprofessional website done and want to grow 
their business using an easy to manage website.`;

const program ="HTML, CSS, Bootstrap, SASS,Javascript, Jquery, PHP, MySql, WordPress"

const firstSubstring = myString.split("\n");
const secendSubstring = myString.split(" ", 10);
const therdSubstring = program.split(',');
console.log(firstSubstring);
console.log(secendSubstring);
console.log(therdSubstring);