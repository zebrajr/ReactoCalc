import logo from './logo.svg';
import './App.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';
import WelcomeText from './components/pages/Welcome';
import LoanCalculator from './components/LoanCalculator';

function App() {
    return (
        <div className="App">
            <main>
                <WelcomeText />
                <div className="accordions" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Loan Calculator</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LoanCalculator />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </main>
        </div>
    );
}

export default App;
