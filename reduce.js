//.......................................Summing an array of numbers:
const nums = [ 0, 1, 2, 3 , 4 ];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator: ", acc,
        "Current Value: ", curr,
        "Total: ", acc + curr
    )
    return acc + curr;
}, 0); // be explicit with the starting value within the array
console.log(sum);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
];
  
//.......................................Totaling a specific object property
let totalYearsExp = teamMembers.reduce((acc, curr) => (acc + curr.yrsExperience), 0);
console.log(totalYearsExp);


//.......................................Grouping by a property, and totaling it too
let expByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});

console.log(expByProfession);