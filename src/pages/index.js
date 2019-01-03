import React from 'react';
import styled from 'styled-components';
import { space, themeGet } from 'styled-system';
import Layout from '../components/layout';
import { Heading } from '../components/utils';
import SEO from '../components/seo';

const Section = styled.section`
  border-top: solid 1px ${themeGet('colors.grey.light')};
  ${space}
`;

const IndexPage = ({ data }) => {
  const page = data.contentfulPage;
  const references = data.allContentfulReference.edges;
  return (
    <Layout>
      <SEO title="Accueil" keywords={[`axiome`, `communication`, `rennes`]} />
      {page.title && (
        <Heading is="h1" textAlign="center">
          {page.title}
        </Heading>
      )}
      {page.subtitle && (
        <Heading color="grey.medium" textAlign="center">
          {page.subtitle}
        </Heading>
      )}
      <Section
        pt={4}
        mt={4}
        dangerouslySetInnerHTML={{
          __html: page.introduction.childContentfulRichText.html,
        }}
      />
      <Section
        pt={4}
        mt={4}
        dangerouslySetInnerHTML={{
          __html: page.skills.childContentfulRichText.html,
        }}
      />
      <Section
        pt={4}
        mt={4}
        dangerouslySetInnerHTML={{
          __html: page.team.childContentfulRichText.html,
        }}
      />
      <Section pt={4} mt={4}>
        <Heading color="grey.medium">Quelques Références :</Heading>
        <ul>
          {references.map(({ node }, i) => (
            <li key={node.id}>{node.title}</li>
          ))}
        </ul>
      </Section>
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
