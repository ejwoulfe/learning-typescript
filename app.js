function add(x, y) {
    return x + y;
}
// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(add("5",25));
console.log(add(5, 53));
function charactersInString(word) {
    var characterArray = [];
    for (var i = 0; i < word.length; i++) {
        characterArray.push(word.charAt(i));
    }
    return characterArray;
}
console.log(charactersInString("testing"));
