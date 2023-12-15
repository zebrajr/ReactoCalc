import React from 'react';
import { Typography } from '@mui/material';

const sectionID = 'welcome';

function WelcomeText(){
    return (
        <div style={{ margin: '20px' }}>
            <section id={ sectionID }>
                    <Typography variant="h3" style={{color: "#839D0D"}}>
                        ReactoCalc
                    </Typography>
                    <Typography variant="subtitle1" color="inherit" noWrap>
                        A collection of (sometimes) useful calculators
                    </Typography>
                </section>
        </div>
    )
}

export default WelcomeText;