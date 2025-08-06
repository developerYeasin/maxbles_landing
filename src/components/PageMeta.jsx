import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageMeta = ({ title, description }) => {
  const siteName = 'MaxBles Digital';
  const defaultTitle = `${siteName} - DIGITAL CONSULTING AGENCY`;
  const defaultDescription = 'MaxBles Digital is a leading digital consulting agency offering expert services in web development, UI/UX design, digital marketing, and automation. Explore our portfolio and read our blog for the latest insights.';
  const logoUrl = "https://res.cloudinary.com/dbk7ixyvd/image/upload/v1754242560/maxbles-final-color-1-1536x354_xadpkb.png";

  // If a title is provided, format it as "MaxBles Digital - {title}". Otherwise, use the default homepage title.
  const pageTitle = title ? `${siteName} - ${title}` : defaultTitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="icon" href={logoUrl} type="image/png" />
      <link rel="shortcut icon" href={logoUrl} type="image/png" />
      <link rel="apple-touch-icon" href={logoUrl} />
    </Helmet>
  );
};

export default PageMeta;