import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
// import Image from '../components/image'
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const page = data.contentfulPage;
  const references = data.allContentfulReference.edges;
  return (
    <Layout>
      <SEO title="Home" keywords={[`axiome`, `communication`, `rennes`]} />
      <h1>{page.title}</h1>
      <h2>{page.subtitle}</h2>
      <section
        dangerouslySetInnerHTML={{
          __html: page.introduction.childContentfulRichText.html,
        }}
      />
      <section
        dangerouslySetInnerHTML={{
          __html: page.skills.childContentfulRichText.html,
        }}
      />
      <section
        dangerouslySetInnerHTML={{
          __html: page.team.childContentfulRichText.html,
        }}
      />
      <h2>Références :</h2>
      <ul>
        {references.map(({ node }, i) => (
          <li key={node.id}>{node.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    contentfulPage(id: { eq: "8556f0d5-4040-5195-ab62-b0dbec2c534c" }) {
      title
      subtitle
      introduction {
        childContentfulRichText {
          html
        }
      }
      skills {
        childContentfulRichText {
          html
        }
      }
      team {
        childContentfulRichText {
          html
        }
      }
    }
    allContentfulReference {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
