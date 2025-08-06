import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageMeta = ({ title, description }) => {
  const siteName = 'MaxBles Digital';
  const defaultTitle = `${siteName} - DIGITAL CONSULTING AGENCY`;
  const defaultDescription = 'MaxBles Digital is a leading digital consulting agency offering expert services in web development, UI/UX design, digital marketing, and automation. Explore our portfolio and read our blog for the latest insights.';

  // If a title is provided, format it as "MaxBles Digital - {title}". Otherwise, use the default homepage title.
  const pageTitle = title ? `${siteName} - ${title}` : defaultTitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default PageMeta;