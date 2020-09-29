import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const DocsSeo = ({ title, url }) => {
  return (
    <>
      <NextSeo
        title={`${title} - Fall Guys API`}
        canonical={url}
        openGraph={{
          type: 'article',
          url,
          title
        }}
      />
      <ArticleJsonLd title={title} url={url} />
    </>
  );
};

export default DocsSeo;
