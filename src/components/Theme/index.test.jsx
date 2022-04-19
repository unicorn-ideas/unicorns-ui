import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Theme from './index';

test('renders a message', () => {
  const { container, getByText } = render(
    <Theme>
      <h1>Goodbye, Vogons!</h1>
    </Theme>,
  );
  expect(getByText('Goodbye, Vogons!')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <main
      class="text-blue-900 bg-slate-700"
    >
      <h1>
        Goodbye, Vogons!
      </h1>
    </main>
  `);
});
