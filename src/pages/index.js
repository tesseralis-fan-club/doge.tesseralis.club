import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Much @tesseralis. very official. wow</h1>
    <p>o hai. very fan club.</p>
    <p>very praise.</p>
    <p>So pretty. wow. Much talented.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
<<<<<<< HEAD
    <Link to="/page-2/">go 2</Link>
    <Link to="/page-3/">go 3</Link>
=======
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
    <Link to="/page-4/">Go to page 4</Link>
>>>>>>> cb5e99840a5ed4abec7aefb25480d0e551b9d9de
  </Layout>
)

export default IndexPage
