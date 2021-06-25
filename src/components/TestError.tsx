import React from 'react';

const TestError = (): JSX.Element => {
  // Uncomment the line below to test the error boundary
  // throw new Error("Testing");

  return (
    <div>
      <p data-testid="testError">Looks good</p>
    </div>
  );
};

export default TestError;
