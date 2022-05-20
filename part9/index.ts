import express from 'express';
import {bmiCalculator} from './bmicalculator';
import { exerciseCalculator } from './exerciseCalculator';
const app = express();
app.use(express.json());
const PORT = 3003;

app.get('/hello', (_req, res) => {
    res.send('<h1>Hello Full Stack<h1>')
})

app.get('/', (req, res) => {
    const weight : number = Number(req.query.weight);
    const height : number = Number(req.query.height);
    const result : number = bmiCalculator(weight, height);
    if(isNaN(weight) || isNaN(height)) {res.send({error : "Malformatted parameters"}); return;}
    res.send({
        "weight" : weight,
        "height" : height,
        "result" : result
    })
})

app.post('/', (req, res) => {
    const exercises : Array<number> = req.body.daily_exercises;
    const target : number = req.body.target;
    if(exercises === null || target === null){res.send({error : "Parameters missing"}); return;}
    if(exercises.some(exercise => isNaN(exercise)) || isNaN(target)){res.send({error : "Malformatted parameters"}); return;}
    res.send(JSON.stringify(exerciseCalculator(exercises, target)))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})