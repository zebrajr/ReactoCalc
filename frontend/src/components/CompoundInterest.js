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



function CompoundInterestCalculator(){
    const [initialInvestment, setInitialInvestment] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [annualInterestRate, setAnnualInterestRate] = useState('');
    const [compoundsPerYear, setCompoundsPerYear] = useState('');
    const [investmentTerm, setInvestmentTerm] = useState('');
    const [InitialInvestmentCompound, setInitialInvestmentCompound] = useState(null);
    const [ContributionsInvestmentCompound, setContributionsInvestmentCompound] = useState(null);
    const [TotalCompound, setTotalCompound] = useState(null);
    const [TotalCompoundPlus2, setTotalCompoundPlus2] = useState(null);
    const [TotalCompoundMinus2, setTotalCompoundMinus2] = useState(null);

    const handleCalculation = () => {
        const P = Number(initialInvestment);
        const PMT = Number(monthlyContribution);
        const r = Number(annualInterestRate) / 100;
        const n = Number(compoundsPerYear);
        const t = Number(investmentTerm);

        const A = calculateCompoundInterest(P, r, n, t);
        const S = calculateCompoundInterestWithContributions(PMT, r, n, t);
        const totalCompounded = A + S;

        const APlus2 = calculateCompoundInterest(P, (r + 0.02), n, t);
        const SPlus2 = calculateCompoundInterestWithContributions(PMT, (r + 0.02), n, t);

        const totalCompoundedPlus2 = APlus2 + SPlus2;

        const AMinus2 = calculateCompoundInterest(P, (r - 0.02), n, t);
        const SMinus2 = calculateCompoundInterestWithContributions(PMT, (r - 0.02), n, t);

        const totalCompoundedMinus2 = AMinus2 + SMinus2;

        setInitialInvestmentCompound({
            text: 'Initial Investment Compounded',
            value: Number(A).toFixed(2)
        });

        setContributionsInvestmentCompound({
            text: 'Monthly Contributions Compounded',
            value: Number(S).toFixed(2)
        });

        setTotalCompound({
            text: 'Total Compounded',
            value: Number(totalCompounded).toFixed(2)
        });

        setTotalCompoundPlus2({
            text: 'Total Compounded (+2.00% speculation)',
            value: Number(totalCompoundedPlus2).toFixed(2)
        });

        setTotalCompoundMinus2({
            text: 'Total Compounded (-2.00% speculation)',
            value: Number(totalCompoundedMinus2).toFixed(2)
        });
       
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
                {ContributionsInvestmentCompound !== null && <ResultDisplay result={ ContributionsInvestmentCompound } />}
                {InitialInvestmentCompound !== null && <ResultDisplay result={ InitialInvestmentCompound } />}
                {TotalCompound !== null && <ResultDisplay result={ TotalCompound } />}
                {TotalCompoundPlus2 !== null && <ResultDisplay result={ TotalCompoundPlus2 } />}
                {TotalCompoundMinus2 !== null && <ResultDisplay result={ TotalCompoundMinus2 } />}
            </div>
        </div>
    )
}

export default CompoundInterestCalculator;