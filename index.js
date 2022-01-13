function findMatching(driverNames, searchName) {
    const result = driverNames.filter(name => name.toUpperCase() === searchName.toUpperCase())

    return result;
}

function fuzzyMatch(driverNames, searchName) {
const namesWithLetter = driverNames.filter ( (name) => name.substring (0,1) === searchName.substring(0,1) )

return namesWithLetter;

}

    
function matchName(driverNames, searchName) {
  
  const match = driverNames.filter ( (name) => name.name === searchName)
  
  return match;

}
