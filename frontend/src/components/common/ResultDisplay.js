import React from 'react';

function ResultDisplay({ result }) {
  return <h2>{result.text }: {result.value }</h2>;
}

export default ResultDisplay;
