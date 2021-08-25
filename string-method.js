// text transform in js 
const myName = "Abu Daud Hossain Sumon";
const myFrends = ['Emran', 'Faruk', 'Rasel', 'Abu Syad']
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());


/* const characterIndex = myName.toLowerCase().indexOf('d');
console.log(characterIndex);
const arryElemntIndex = myFrends.indexOf("Rasel");
console.log(arryElemntIndex);
console.log(myFrends.indexOf('faruk'));

if(myFrends.indexOf('faruk') == '-1'){
    console.log(`Cannot here this`);
}else{
    console.log('This frend here');
} */

/* // includs method 
console.log(myFrends.includes('Faruk'));
console.log(myFrends.includes('faruk'));
// return true;
if(myFrends.includes('Faruk')){
    console.log(`Cannot here this`);
}else{
    console.log('This frend here');
}
// return false 
if(myFrends.includes('faruk')){
    console.log(`Cannot here this`);
}else{
    console.log('This frend here');
} */

const string1 = "sometime i can go on this place";
const string2 = "someof my friend go on this place";
const string3 = "someof people are os base in on her work";

const answer = string1.startsWith('sometime');
const answer2 = string1.startsWith('ometime');
const answer1 = string1.endsWith('place');
const answer3 = string1.endsWith('plac');
console.log(answer, answer2, answer1, answer3);

const frends =['rased', 'rasel', 'rakib','atik', 'atika banu', 'atosi','sumon', 'sujon', 'samsul' ];

const result = frends.filter(frend => frend.startsWith('ra'));
const result1 = frends.filter(frend => frend.startsWith('ras'));
const result3 = frends.filter(frend => frend.startsWith('at'));
const result4 = frends.filter(frend => frend.endsWith('on'));


console.log(result, result1, result3, result4);