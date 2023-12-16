import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

import NumberInput from './common/NumberInput';
import ResultDisplay from './common/ResultDisplay';

// Div Class Names
const divMainClassName = "LoanCalculator";
const divFieldsClassName = "numberFields"

// Title & Headlines
const titleText = "Loan Calculator";
const usedFormula = "Monthly Payment = X * ((Y / 12) / (1 - (1+Y / 12)^(-12Z)))"

// Field Values
const loanAmountFieldPlaceholder = 'Loan Amount';
const annualInterestRatePlaceholder = 'Annual Interest Rate (%)';
const loanTermYearsPlaceholder = 'Loan Term (Years)';


function LoanCalculator(){
    const [loanAmount, setloanAmount] = useState('');
    const [annualInterestRate, setannualInterestRate] = useState('');
    const [loanTerm, setloanTerm] = useState('');
    const [MonthlyPayment, setMonthlyPayment] = useState(null);
    const [TotalRepayment, setTotalRepayment] = useState(null);

    const handleCalculation = () => {
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
    };

    return( 
        <div className={ divMainClassName }>
            
            <Typography variant="h4">{ titleText }</Typography>
            <Typography variant="subtitle1">{ usedFormula }</Typography>
            <div className={ divFieldsClassName }>
                <NumberInput
                value={loanAmount}
                onChange={(e) => setloanAmount(e.target.value)}
                placeholder={ loanAmountFieldPlaceholder }
                />
            </div>
            <div className={ divFieldsClassName }>
                <NumberInput
                value={annualInterestRate}
                onChange={(e) => setannualInterestRate(e.target.value)}
                placeholder={ annualInterestRatePlaceholder }
                />
            </div>
            <div className={ divFieldsClassName }>
                <NumberInput
                value={loanTerm}
                onChange={(e) => setloanTerm(e.target.value)}
                placeholder={ loanTermYearsPlaceholder }
                />
            </div>
            <div className={ divFieldsClassName }>
                <Button variant="text" onClick={handleCalculation}>Calculate Monthly Payment</Button>
                {MonthlyPayment !== null && <ResultDisplay result={MonthlyPayment} />}
                {TotalRepayment !== null && <ResultDisplay result={TotalRepayment} />}
            </div>
        </div>
    )
}

export default LoanCalculator;