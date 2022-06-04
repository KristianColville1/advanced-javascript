//..........................................Using a for loop
let nums = [ 1, 2, 3, 4 ,5 ];
let results = [];
for (let num of nums){
    results.push(num * 2);
}

console.log(results);


//..........................................Using map()
const multiByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multiByTwo);
console.log(mapResults);


//..........................................Simplified w/ map()
const simplified = nums.map(function(num) {return num * 2});
console.log(simplified);


//..........................................Simplified w/ map() + arrow function
const arrowMap = nums.map(num => num * 2);
console.log(arrowMap);


//..........................................With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
];

// create an array containing an array for each student their id and name;

const studentWithIds = students.map(student => [ student.name, student.id]);
console.log(studentWithIds);

