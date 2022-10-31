import Link from 'next/link';
import React from 'react';

interface Props {
  url: string;
  children: React.ReactNode;
}

export const SocialLink = ({ url, children }: Props) => {
  return (
    <Link href={url} passHref>
      {children}
    </Link>
  );
};
