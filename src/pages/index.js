import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import List from "../components/list/list"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <List />
  </Layout>
)

export default IndexPage
