// our-domain.com/news/??

import { useRouter } from 'next/router';
import React from 'react';

const DetailsPage = () => {
  const router = useRouter();

  // extracting parameter values newsId because thats the file name
  console.log(router.query.newsId);

  return <h1>DetailsPage</h1>;
};

export default DetailsPage;
