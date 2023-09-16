import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Logo } from '@/components/Logo';

describe('Logo', () => {
  const logo = render(<Logo />);
  it('renders logo', () => {
    expect(logo).toBeInTheDocument();
  });
  it('logo matches snapshot', () => {
    expect(logo).toMatchSnapshot();
  });
});
