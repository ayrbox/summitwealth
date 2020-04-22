import React from 'react';
import TemporaryPageList from '../components/TemporaryPageList';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div style={{ height: '200vh' }}>
      <TemporaryPageList />
    </div>
  </Layout>
);

export default IndexPage;
