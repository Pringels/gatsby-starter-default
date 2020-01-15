/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { colors } from "../components/styles"

const titleStyles = css`
  font-family: Vollkorn;
  font-size: 24px;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`

const hrStyles = css`
  background-color: ${colors.secondary};
  border: 0;
  height: 2px;
`

export default ({ title, children }) => {
  return (
    <div>
      <h1 css={titleStyles}>{title}</h1>
      <hr css={hrStyles} />
      {children}
    </div>
  )
}
