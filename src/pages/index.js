/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Section from "../components/section"
import Experience from "../components/experience"
import Summary from "../components/summary"
import { GlobalStyles } from "../components/styles"

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <Intro />
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          margin-right: 32px;
          flex: 0 2 70%;
        `}
      >
        <Section title="Experience">
          <Experience />
        </Section>
        <Section title="Education">
          <div>I went to school and stuff</div>
        </Section>
      </div>
      <div
        css={css`
          margin-right: 32px;
          flex: 0 1 30%;
        `}
      >
        <Section title="Summary">
          <Summary />
        </Section>
        <Section title="Skills">
          <div>I went to school and stuff</div>
        </Section>
      </div>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
