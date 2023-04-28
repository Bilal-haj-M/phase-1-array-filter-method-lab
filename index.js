// Code your solution here
function findMatching(drivers , quary) {
    return drivers.filter(driver => driver.toLowerCase() === quary.toLowerCase());
}

function fuzzyMatch(drivers , quary) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(quary.toLowerCase()))
}

function matchName(drivers , quary) {
    return drivers.filter(driver => driver.name === quary)
}