import React from "react";

export const Meta = ({
  title,
  description = title,
  locale = "ja_JP",
  publishedAt,
  host
}) => (
  <React.Fragment>
    <meta property="og:locale" content={locale} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={host} />
    <meta property="og:image" content={`${host}/assets/card.png`} />
    <meta property="article:published_time" content={publishedAt} />
    <meta property="article:author" content="naturalclar" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:image:src" content={`${host}/assets/card.png`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:url" content={host} />
    <title>{title}</title>
    <link
      rel="alternate"
      type="application/json+oembed"
      href={`${host}/assets/oembed.json`}
      title={title}
    />
  </React.Fragment>
);
