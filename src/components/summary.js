/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { colors } from "../components/styles"

const summaryStyle = css`
  font-family: Roboto;
  font-size: 16px;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
`

export default () => {
  return (
    <p css={summaryStyle}>
      Meticulous web developer with over 2 years of front end experience and
      passion for responsive website design and a firm believer in the
      mobile-first approach. W3C certified. Implemented new responsive website
      approach which increased mobile traffic by 20%.
    </p>
  )
}
