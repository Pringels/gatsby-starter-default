/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { colors } from "../components/styles"

const titleStyles = css`
  font-family: Vollkorn;
  font-size: 32px;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
`

const subTitleStyles = css`
  font-family: Vollkorn-Bold;
  font-size: 24px;
  color: ${colors.primary};
  margin: 0;
  padding: 0;
`

export default () => {
  return (
    <div>
      <h1 css={titleStyles}>PETER RINGELMANN</h1>
      <h2 css={subTitleStyles}>Front-end developer</h2>
    </div>
  )
}
