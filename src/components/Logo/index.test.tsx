import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Logo } from '@/components/Logo';

describe('Logo', () => {
  it('renders logo', () => {
    const logo = render(<Logo />);
    expect(logo).toMatchSnapshot();
  });
});
