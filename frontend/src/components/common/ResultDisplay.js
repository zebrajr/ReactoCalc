import React from 'react';

function ResultDisplay({ result }) {
  return <h3>{result.text }: {result.value }</h3>;
}

export default ResultDisplay;
