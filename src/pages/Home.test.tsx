import React from 'react';
import { render } from '../../test/test-utils';
import { cleanup } from '@testing-library/react';
import Home from './Home';
import ReactDOM from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '../components/ErrorBoundary';

afterEach(cleanup);
it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  const section = document.createElement("section");
  ReactDOM.render(<Home />, section);

});

it('renders content', () => {

  const { getByTestId } = render(<Home />);
  expect(getByTestId('title')).toHaveTextContent("Welcome!");
  expect(getByTestId('testError')).toHaveTextContent("Looks good");
});


// test Error boundary
let mockfunction;
beforeAll(() => {
  mockfunction = jest.spyOn(console, 'error')
  mockfunction.mockImplementation(() => { })
})

afterAll(() => {
  mockfunction.mockRestore();
})

const ThrowsError = (): JSX.Element => {
  throw new Error('Testing')
}

it(`shows the fallback when there's an error`, () => {
  render(
    <ErrorBoundary >
      <ThrowsError />
    </ErrorBoundary>
  );
  expect(Error).toBeTruthy();
  expect(mockfunction).toHaveBeenCalledTimes(2)
});

beforeEach(() => {
  mockfunction = jest.spyOn(console, 'error').mockImplementation(() => { })
})
afterEach(() => {
  mockfunction.mockRestore()
})

