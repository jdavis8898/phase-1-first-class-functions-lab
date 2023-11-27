const returnFirstTwoDrivers = (listOfDrivers) => {
    let firstTwo = [listOfDrivers[0], listOfDrivers[1]]
    
    return firstTwo
}
const returnLastTwoDrivers = (listOfDrivers) => {
    let lastTwo = [listOfDrivers[listOfDrivers.length-2], listOfDrivers[listOfDrivers.length-1]]
    
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier = 1)
{
    return function (fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(listOfDrivers, fn)
{
    return fn(listOfDrivers)
}
