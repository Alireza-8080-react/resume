import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Header } from '@/components/Header';

describe('Header', () => {
  const header = render(<Header />);

  it('renders header', () => {
    expect(header).toBeInTheDocument();
  });
  it('header matches snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
