// signal digit sort 
const numbers = [1, 4, 5, 8, 2 , 9, 6, 7];
const sortedNumbers = numbers.sort();
const reverseSortNumbers = sortedNumbers.reverse();
console.log(reverseSortNumbers);
//duble digit sort 
const bigNumbers = [12,670, 450,9,192,34,54,23];
const sortedBigNumbers = bigNumbers.sort(function(a,b){
    return a-b;
});
//word sorting
const friends = ['korim','khorim','sumon','ratul','bikrom','babul','akib','afif','afie'];
// const sortedFriends = friends.sort();
const reverseSortFriends = friends.reverse();
console.log(reverseSortFriends);