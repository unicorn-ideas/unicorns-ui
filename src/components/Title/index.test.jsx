import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './index';

test('renders a control', () => {
  const { container, getByText } = render(
    <Title>The Fuolornis Fire Dragons</Title>,
  );
  expect(getByText('The Fuolornis Fire Dragons')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      The Fuolornis Fire Dragons
    </h1>
  `);
});
