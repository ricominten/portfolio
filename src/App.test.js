import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { screen } = render(<App />);
  expect(screen).toMatchSnapshot();
});
