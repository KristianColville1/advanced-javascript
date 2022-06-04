//...............................Destructuring arrays

//.........................before
let ages = [20, 23, 62];
let john = ages[0]
let mary = ages[1]
let gary = ages[2]
console.log(john, mary, gary);

//.........................After
let ages2 = [20, 23, 62];
let [john2, mary2, gary2] = ages;
console.log(john2, mary2, gary2);


//...............................Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


//...............................Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [,,maryNative, marySecondary] = languages; // commas to skip values when destructuring
console.log(maryNative, marySecondary);



let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
}
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);



//...............................Using rest parameter syntax

let fruits = ['apples', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondfavorite, ...others] = fruits;
console.log(favorite, secondfavorite, others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
}

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
