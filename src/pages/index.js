import React from 'react';
import styled from 'styled-components';
import { space, color, borderRadius, themeGet } from 'styled-system';
import Layout from '../components/layout';
import { Heading } from '../components/utils';
import SEO from '../components/seo';
import References from '../components/references';

const Section = styled.section`
  border-top: solid ${props => (props.withBorder ? 1 : 0)}px
    ${themeGet('colors.grey.light')};
  ${space}
  ${color}
  ${borderRadius}
`;

const IndexPage = ({ data }) => {
  const page = data.contentfulPage;
  const references = data.allContentfulReference.edges;
  return (
    <Layout>
      <SEO title="Accueil" keywords={[`axiome`, `communication`, `rennes`]} />
      {page.title && (
        <Heading is="h1" color="grey.medium" textAlign="center" fontSize={4}>
          {page.title}
        </Heading>
      )}
      <Section
        p={4}
        mt={4}
        bg="secondary.light"
        borderRadius={8}
        dangerouslySetInnerHTML={{
          __html: page.introduction.childContentfulRichText.html,
        }}
      />
      <Section
        pt={4}
        dangerouslySetInnerHTML={{
          __html: page.skills.childContentfulRichText.html,
        }}
      />
      <Section
        p={4}
        mt={4}
        bg="secondary.medium"
        color="white"
        borderRadius={8}
        dangerouslySetInnerHTML={{
          __html: page.team.childContentfulRichText.html,
        }}
      />
      <Section mt={4}>
        <Heading color="grey.medium">Quelques Références :</Heading>
        <References items={references} />
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    contentfulPage(id: { eq: "8556f0d5-4040-5195-ab62-b0dbec2c534c" }) {
      title
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
          thumbnail {
            fluid(maxWidth: 250) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid
            }
            title
          }
        }
      }
    }
  }
`;
