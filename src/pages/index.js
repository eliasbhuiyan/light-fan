import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <>
    <Layout pageTitle="Home Page">
     <section className=''>
      <div className='container'>
        <StaticImage src="../images/bg.png" layout='fullWidth' alt="Logo" />
      </div>
     </section>
      
    </Layout>
    </>
  )
}
export const Head = () => <Seo title="Home Page" />

export default IndexPage