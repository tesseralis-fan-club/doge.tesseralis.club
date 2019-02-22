import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`awesome`, `nat`, `tess`]} />
    <h1>Much @tesseralis. very official. wow</h1>
    <p>o hai. very fan club.</p>
    <p>very praise.</p>
    <p>So pretty. wow. Much talented.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">go 2</Link>
    <Link to="/page-3/">go 3</Link>
    <Link to="/page-4/">go 4</Link>
  </Layout>
)

export default IndexPage
