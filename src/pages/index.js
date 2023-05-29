import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import { graphql } from "gatsby"
const IndexPage = ({data}) => {
  const image = getImage(data.allFile.nodes)
  console.log(data,'===========');
  return (
    <>
    <Layout pageTitle="Home Page">
     <section className=''>
      <div className='container'>
        {/* <StaticImage src="../images/bg.png" layout='fullWidth' alt="Logo" /> */}
      </div>
     </section>
     <section>
      <div>
        {
          image.map((image, index)=>{
            <GatsbyImage image={image.childImageSharp.gatsbyImageData.images.fallback.src} />

          })
        }
      </div>
     </section>
      
    </Layout>
    </>
  )
}
export const query  = graphql`
query MyQuery {
  allFile {
    nodes {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
}
`
export const Head = () => <Seo title="Home Page" />

export default IndexPage