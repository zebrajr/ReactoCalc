import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';

import '../App.css';

import ResultDisplay from './common/ResultDisplay';

// Div Class Names
const divMainClassName = "CompoundCalculator";
const divFieldsClassName = "numberFields";

// Title & Headlines
const titleText = "Compound Interest";
const usedFormulaInitialInvestment = "A = P(1 + r/n)^nt";
const usedFormulaInitialInvestmentExplanation = "A = Future Investment, including interest | P = Initial Deposit | r = annual interest rate (decimal) | n = number of compound per year | t = investement term, in years";
const usedFormulaRegularContributions = "S = PMT x (((1 + r/n)^nt-1)/(r/n))";
const usedFormulaRegularContributionsExplanation = "S = Future Value of Contributions | PMT = Regular Contribution per period";
const usedFormulaTotalFutureValue = "Total Future Value = A + S";

// Field Values
const initialInvestmentPlaceholder = 'Initial Investment (€)';
const monthlyContributionPlaceholder = 'Monthly Contribution (€)';
const annualInterestRatePlaceholder = 'Annual Interest Rate (%)';
const compoundsPerYearPlaceholder = 'Compounds per Year';
const investmentTermPlaceholder = 'Investment Term (Years)';



function calculateCompoundInterest(P, r, n, t) {
    return P * Math.pow(1 + r / n, n * t);
}


function calculateCompoundInterestWithContributions(PMT, r, n, t) {
    let S = PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
    return S;
}


function totalFutureValue(P, PMT, r, n, t) {
    let A = calculateCompoundInterest(P, r, n, t);
    let S = calculateCompoundInterestWithContributions(PMT, r, n, t);
    return A + S;
}



function CompoundInterestCalculator(){
    const [initialInvestment, setInitialInvestment] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [annualInterestRate, setAnnualInterestRate] = useState('');
    const [compoundsPerYear, setCompoundsPerYear] = useState(null);
    const [investmentTerm, setInvestmentTerm] = useState(null);

    const handleCalculation = () => {
        const P = Number(initialInvestment);
        const PMT = Number(monthlyContribution);
        const r = Number(annualInterestRate) / 100;
        const n = Number(compoundsPerYear);
        const t = Number(investmentTerm);

        
        /*
        const loanAmountNumber = Number(loanAmount);
        const loanTermNumber = Number(loanTerm);
        const annualInterestRateDecimal = Number(annualInterestRate) / 100;

        const monthlyPayment = loanAmountNumber * (annualInterestRateDecimal / 12) / (1 - Math.pow((1 + annualInterestRateDecimal / 12), (-12 * loanTermNumber)));

        const totalRepaymentCalculated = Number(monthlyPayment) * 12 * loanTermNumber;

        setMonthlyPayment({
            text: 'Monthly Payment',
            value: Number(monthlyPayment).toFixed(2)
        });

        setTotalRepayment({
            text: 'Total Repayment',
            value: Number(totalRepaymentCalculated).toFixed(2)
        });
        */
       return false;
    };

    return( 
        <div className={ divMainClassName }>
            
            <Typography variant="h4" className='largeBoldHeaderSecondary'>{ titleText }</Typography>
            <Typography variant="subtitle1">{ usedFormulaTotalFutureValue }</Typography>
            <Typography variant="subtitle1">{ usedFormulaInitialInvestment }</Typography>
            <Typography variant="subtitle1">{ usedFormulaRegularContributions }</Typography>
            <Typography variant="subtitle1">{ usedFormulaInitialInvestmentExplanation }</Typography>
            <Typography variant="subtitle1">{ usedFormulaRegularContributionsExplanation }</Typography>
            <div className={ divFieldsClassName }>
                <TextField
                value={ initialInvestment }
                onChange={(e) => setInitialInvestment(e.target.value)}
                label={ initialInvestmentPlaceholder }
                variant="filled"
                />
            </div>
            <div className={ divFieldsClassName }>
                <TextField
                value={ monthlyContribution }
                onChange={(e) => setMonthlyContribution(e.target.value)}
                label={ monthlyContributionPlaceholder }
                variant="filled"
                />
            </div>
            <div className={ divFieldsClassName }>
                <TextField
                value={ annualInterestRate }
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                label={ annualInterestRatePlaceholder }
                variant="filled"
                />
            </div>
            <div className={ divFieldsClassName }>
                <TextField
                value={ compoundsPerYear }
                onChange={(e) => setCompoundsPerYear(e.target.value)}
                label={ compoundsPerYearPlaceholder }
                variant="filled"
                />
            </div>
            <div className={ divFieldsClassName }>
                <TextField
                value={ investmentTerm }
                onChange={(e) => setInvestmentTerm(e.target.value)}
                label={ investmentTermPlaceholder }
                variant="filled"
                />
            </div>
            <div className={ divFieldsClassName }>
                <Button variant="text" onClick={handleCalculation}>Calculate Compound Interest</Button>
                {/*
                {MonthlyPayment !== null && <ResultDisplay result={MonthlyPayment} />}
                {TotalRepayment !== null && <ResultDisplay result={TotalRepayment} />}
                */}
            </div>
        </div>
    )
}

export default CompoundInterestCalculator;