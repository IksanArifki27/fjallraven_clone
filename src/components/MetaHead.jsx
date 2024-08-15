import React from "react";
import Head from "next/head";
function MetaHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Place the meta description text here.">
        {description}
      </meta>
    </Head>
  );
}

export default MetaHead;
