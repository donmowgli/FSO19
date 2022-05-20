interface bmi {
    weight: number;
    height: number;
}

const parseArguments = (args: Array<string>): bmi => {
    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return{
            weight: Number(args[2]),
            height: Number(args[3])
        }
    }
    return {weight: Number(0), height: Number(0)}
}

const bmiCalculator = (weight: number, height: number) => {
    const heightMeters = height * 0.01
    const index = weight / (heightMeters * heightMeters)
    console.log("Calculated BMI is " + index)
    return(index)
}

const {weight, height} = parseArguments(process.argv);
bmiCalculator(weight, height)

export {bmiCalculator}