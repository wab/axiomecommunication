import React from 'react';

import Layout from '../components/layout';
import { Heading } from '../components/utils';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading is="h1">Page non trouvé</Heading>
    <p>Cette route n'existe pas !</p>
  </Layout>
);

export default NotFoundPage;
