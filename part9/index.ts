import express from 'express';
import {bmiCalculator} from './bmicalculator'
const app = express();
const PORT = 3003;

app.get('/hello', (_req, res) => {
    res.send('<h1>Hello Full Stack<h1>')
})

app.get('/', (req, res) => {
    const weight : number = Number(req.query.weight);
    const height : number = Number(req.query.height);
    const result : number = bmiCalculator(weight, height)
    if(isNaN(weight) || isNaN(height)) {res.send({"error" : "Malformatted parameters"}); return;}
    res.send({
        "weight" : weight,
        "height" : height,
        "result" : result
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})