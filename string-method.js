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

// includs method 
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
}