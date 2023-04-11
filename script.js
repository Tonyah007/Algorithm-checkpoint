

let count_length = 0;
let count_vowels = 0;
let count_words = 0;

count_length = function(str){
    return str.split('').length;
}
count_vowels = function(str){
    return str.replace(/[^aeiou]/gmi, "").length;
}
count_words = function(str){
    return str.split(' ').length;
}

console.log(count_length("the land is green"));
console.log(count_vowels("the land is green"));
console.log(count_words("the land is green"));


