import * as React from 'react'
import { Link } from 'gatsby'
const AboutPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to='/'>Home</Link>
    </main>
  )
}

export const Head = () => <title>About Page</title>

export default AboutPage