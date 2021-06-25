import React from 'react';
import { render } from '../../test/test-utils';
import LayoutContainer from './LayoutContainer';
import '@testing-library/jest-dom/extend-expect';


it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const {
    container,
    history: { navigate },
  } = render(<LayoutContainer />)
  const appContainer = container;
  expect(appContainer.innerHTML).toMatch('Welcome!');
  await navigate('/about');
  expect(container.innerHTML).toMatch('About Page');
});
