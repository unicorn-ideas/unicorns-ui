import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

test('renders a control', () => {
  const { container, getByText } = render(
    <Button>The Fuolornis Fire Dragons</Button>,
  );
  expect(getByText('The Fuolornis Fire Dragons')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="bg-gradient-to-br from-button-x to-slate-700 text-button-y hover:from-button-hover-z hover:text-button-hover-y font-bold text-sm py-2  px-4  rounded-full"
    >
      The Fuolornis Fire Dragons
    </button>
  `);
});
