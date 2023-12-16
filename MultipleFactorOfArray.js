
function countTeam(skills, minplayers, minLevel, maxLevel) {
  skills.sort((a, b) => a - b);
let result = 0;
 let newSkillList = [];

   console.log(skills);

   for( let i=0; i < skills.length; i++){
      newSkillList = skills.slice(0, skills.length -2)
   }
 
   console.log(newSkillList);
  return newSkillList;
}

const skills = [12, 4, 6, 13, 5, 10];

const minplayers = 3;

const minLevel = 4;
const maxLevel = 10;

console.log(countTeam(skills, minplayers, minLevel, maxLevel));
