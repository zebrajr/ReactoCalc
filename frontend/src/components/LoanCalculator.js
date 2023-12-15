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
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        setResult(Number(input1) + Number(input2));
    };

    return( 
        <div className={ divMainClassName }>
            
            <Typography variant="h4">{ titleText }</Typography>
            <Typography variant="subtitle1">{ usedFormula }</Typography>
            <div className={ divFieldsClassName }>
                <NumberInput
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder={ loanAmountFieldPlaceholder }
                />
            </div>
            <div className={ divFieldsClassName }>
            <NumberInput
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder={ annualInterestRatePlaceholder }
            />
            </div>
            <div className={ divFieldsClassName }>
            <NumberInput
            value={input2}
            onChange={(e) => setInput3(e.target.value)}
            placeholder={ loanTermYearsPlaceholder }
            />
            </div>
            <Button variant="text" onClick={handleCalculate}>Calculate Monthly Payment</Button>
            {result !== null && <ResultDisplay result={result} />}
            <div className={ divFieldsClassName }></div>
        </div>
    )
}

export default LoanCalculator;