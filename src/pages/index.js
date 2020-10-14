import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="first">Hello my name is</p>
    <h1>Anthony Devine.</h1>
    <h2>I am a Frontend Developer with over 15 years experience in many areas of Web Development.</h2>
    <p>Visit my Linkedin to connect</p>
    <a href="https://www.linkedin.com/in/anthony-devine-5bb92745/" target="_blank" rel="noreferrer"><Image/></a> <br />
  </Layout>
)

export default IndexPage
