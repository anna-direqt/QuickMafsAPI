import { Request, Response } from "express";
import { Fraction } from "./quick-mafs";
const express = require('express');
const app = express(); // new instance of express application
const port = 3000; 

app.get("/calc", (req : Request, res : Response) => {
    console.log(`Request received: ${req.url}`);
    console.dir(req.query);
    const frac1 = Fraction.parseFraction(req.query.frac1 as string);
    const frac2 = Fraction.parseFraction(req.query.frac2 as string);
    const operator = req.query.oper as string;
    const result = Fraction.evaluate(frac1, frac2, operator);
    res.send({frac1: `${frac1.toString()}`, frac2: `${frac2.toString()}`,
              operator: `${operator}`, result: `${result.toString()}`});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});