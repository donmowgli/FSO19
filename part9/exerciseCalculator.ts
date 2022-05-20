interface exercise {
    days : number;
    trainingDays : number;
    target : number;
    average : number;
    reached : Boolean;
    rating : number;
    description : string; 
}

const descriptions : Array<string> = [
    "You're not training too much...",
    "That's what I'm talking about!",
    "Super success!"
]

type input = Array<number>

const parseArgs = (args : Array<string>): Array<number> => {
    let data : Array<number> = [];
    for(let i = 2; i < args.length; i++){
        let number : number = Number(args[i])
        data = data.concat(number)
    }
    return data;
}

const exerciseCalculator = (input : Array<number>): exercise => {
    let days : number = input.length;
    let trainingDays : number = calculateTrainingDays(input);
    let target : number = 4
    let average : number = calculateAverage(input)
    let reached : Boolean = hasReached(trainingDays, target)
    let rating : number = getRating(trainingDays, target)
    let description : string = getDescription(trainingDays, target)

    return {
        days : Number(days),
        trainingDays : Number(trainingDays),
        target : Number(target),
        average : Number(average),
        reached : Boolean(reached),
        rating : Number(rating),
        description : String(description)
    }
}

const calculateTrainingDays = (input : Array<number>): number =>{
    let days : number = 0;
    input.forEach(day => {if(day != 0) days += 1})
    return days;
}

const calculateAverage = (input : Array<number>): number => {
    let total : number = 0;
    input.forEach(day => {total += day})
    const average : number = (total / input.length)
    return average;
}

const hasReached = (total : number, target : number): Boolean => {
    let reached : Boolean = false;
    if(total >= target){reached = true}
    return reached;
}

const getRating = (total : number, target : number): number => {
    if(total < target){return 1}
    if(total = target){return 2}
    if(total > target){return 3}
}

const getDescription = (total : number, target : number): string => {
    if(total < target){return descriptions[0]}
    if(total = target){return descriptions[1]}
    if(total > target){return descriptions[2]}
}

const args = process.argv
const input = parseArgs(process.argv)
console.log (exerciseCalculator(input))
