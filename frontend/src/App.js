import './App.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';
import WelcomeText from './components/pages/Welcome';
import LoanCalculator from './components/LoanCalculator';
import CompoundInterestCalculator from './components/CompoundInterest';

const accordionStyling = {
    maxWidth: "600px",
    margin: "auto",
    width: "100%"
}


function App() {
    return (
        <div className="App">
            <main>
                <WelcomeText />
                <div className="accordions" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Accordion style={{ ...accordionStyling  }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='largeBoldHeaderPrimary'>Loan Calculator</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LoanCalculator />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ ...accordionStyling }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='largeBoldHeaderSecondary'>Compound Interest</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CompoundInterestCalculator />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </main>
        </div>
    );
}

export default App;
