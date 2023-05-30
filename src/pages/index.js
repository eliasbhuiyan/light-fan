import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import { graphql } from "gatsby"
import Slider from "react-slick";

const IndexPage = ({data}) => {
  const image = data.allFile.nodes;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
  
    <>
    <Layout pageTitle="Home Page">
     <section>
      <div>
        {
          image.map((image, index)=>(
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={index}/>
          ))
        }
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
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