import { graphql } from "gatsby"
import ProjectsComponent, { Head } from "../components/projects"

export default ProjectsComponent

export { Head }

export const query = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        cover {
          childImageSharp {
            gatsbyImageData(width: 770, quality: 90)
          }
        }
      }
    }
  }
`
