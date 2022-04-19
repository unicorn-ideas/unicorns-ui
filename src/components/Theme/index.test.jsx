import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Theme from './index';

test('renders a control', () => {
  const { container, getByText } = render(
    <Theme>
      <h1>Goodbye, Vogons!</h1>
    </Theme>,
  );
  expect(getByText('Goodbye, Vogons!')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <main
      class="bg-page-x text-page-y"
    >
      <div
        class="w-1/2 m-auto p-10 leading-loose"
      >
        <h1>
          Goodbye, Vogons!
        </h1>
      </div>
    </main>
  `);
});
