import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './index';

test('renders a message', () => {
  const { container, getByText } = render(
    <Page>
      <h1>Goodbye, Vogons!</h1>
    </Page>,
  );
  expect(getByText('Goodbye, Vogons!')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      Hello from Branded Page:
      <h1>
        Goodbye, Vogons!
      </h1>
    </div>
  `);
});
