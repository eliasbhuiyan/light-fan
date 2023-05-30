import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import { graphql } from "gatsby"
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import Banner from '../components/banner'
import Catagory from '../components/catagory'
import Arrival from '../components/arrival'
import Featured from '../components/featured'
import Collection from '../components/collection'
import FlashSale from '../components/flashSale'
import TopRated from '../components/topRated'
import Blog from '../components/blog'




const IndexPage = ({data}) => {


  return (
  
    <>
      <Layout pageTitle="Home Page">
      <Banner data={data}/>
      <Catagory/>
      <Arrival/>
      <Featured/>
      <Collection/>
      <FlashSale/>
      <TopRated/>
      <Blog/>
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