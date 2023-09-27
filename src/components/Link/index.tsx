import NextLink from 'next/link';

import { LinkProps } from './models';

export const Link = ({ children, href, target }: LinkProps) => {
  const getTarget = () => {
    if (target) {
      return target;
    }
    if (href.toString().startsWith('/')) {
      return '_self';
    }
    return '_blank';
  };
  return (
    <NextLink href={href} target={getTarget()}>
      {children}
    </NextLink>
  );
};
