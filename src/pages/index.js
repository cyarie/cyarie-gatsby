import React from "react"
import { Link } from "gatsby"

import AboutMe from '../components/aboutMe'
import ResumeParent from '../components/resumeParent'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="chris yarie"
      keywords={[`chris yarie`, `python`, `javascript`, `angularjs`, `flask`, `react`, `postgres`, `sql`, `aws`]}
      meta={
        [
          {name: `description`, content: `chris yarie com, you can do anything at chris yarie com`},
          {name: `og:title`, content: `chris yarie dot com`},
          {name: `og:url`, content: `http://chrisyarie.com`}
        ]
      }
    />
    <div>
      <AboutMe/>
    </div>
  </Layout>
);

export default IndexPage
