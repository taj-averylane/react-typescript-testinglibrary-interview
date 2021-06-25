import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  const { getByTestId } = render(<About />);
  const header = getByTestId('header');
  expect(header.textContent).toBe('About Page');
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const { getByTestId } = render(<About />);
  const paraEl = getByTestId('para');
  expect(paraEl.textContent).toBe('Current Count: 0')
  const clickButton = getByTestId('btn');
  userEvent.click(clickButton);
  expect(paraEl.textContent).toBe('Current Count: 1')
});
