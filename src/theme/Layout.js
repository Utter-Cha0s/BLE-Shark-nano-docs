import React from 'react';
import Layout from '@theme-original/Layout';
import { Analytics } from '@vercel/analytics/react'; 

export default function RootLayout(props) {
  return (
    <>
      <Layout {...props} />
      <Analytics />
    </>
  );
}
