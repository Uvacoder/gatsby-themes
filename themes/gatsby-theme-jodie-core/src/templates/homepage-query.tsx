import { graphql } from "gatsby"
import HomepageComponent, { Head } from "../components/homepage"

export default HomepageComponent

export { Head }

export const query = graphql`
  query ($homepagePageLimit: Int!, $homepageProjectLimit: Int!) {
    pages: allPage(sort: { fields: title, order: ASC }, limit: $homepagePageLimit) {
      nodes {
        slug
        title
        cover {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }
        __typename
      }
    }
    projects: allProject(sort: { fields: date, order: DESC }, limit: $homepageProjectLimit) {
      nodes {
        slug
        title: shortTitle
        cover {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }
        __typename
      }
    }
  }
`
