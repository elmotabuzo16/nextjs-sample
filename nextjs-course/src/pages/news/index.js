// our-domain.com/news

import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link href='/news/1'>NextJS is a great framework</Link>
        </li>
        <li>Something</li>
      </ul>
    </>
  );
};

export default NewsPage;
