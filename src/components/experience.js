/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { colors } from "../components/styles"
import { useState } from "react"

const items = [
  {
    title: "Senior Front-end Engineer",
    company: "DHL ITS Berlin",
    dates: "03.2017 - Current",
    location: "Berlin, Germany",
    tasks: [
      "Maintained a list of styled components",
      "Mentored juniors and stuff",
      "Did some JS stuff",
    ],
    relevant: true,
  },
  {
    title: "Intermediate Front-end Engineer",
    company: "Praekelt Consulting",
    dates: "08.2015 - 03.2017",
    location: "Johannesburg, South Africa",
    tasks: [
      "Maintained a list of styled components",
      "Mentored juniors and stuff",
      "Did some JS stuff",
    ],
    relevant: true,
  },
  {
    title: "Junior Full-stack Engineer",
    company: "Isobar South Africa",
    dates: "01.2013 - 03.2015",
    location: "Johannesburg, South Africa",
    tasks: [
      "Maintained a list of styled components",
      "Mentored juniors and stuff",
      "Did some JS stuff",
    ],
    relevant: true,
  },
  {
    title: "Senior UI Designer",
    company: "Isobar South Africa",
    dates: "08.2010 - 01.2013",
    location: "Johannesburg, South Africa",
    tasks: [
      "Maintained a list of styled components",
      "Mentored juniors and stuff",
      "Did some JS stuff",
    ],
    relevant: false,
  },
  {
    title: "Junior 3D Animator",
    company: "Studio Zoo",
    dates: "01.2010 - 08.2010",
    location: "Johannesburg, South Africa",
    tasks: [
      "Maintained a list of styled components",
      "Mentored juniors and stuff",
      "Did some JS stuff",
    ],
    relevant: false,
  },
]

export default () => {
  const [showRelevant, setShowRelevant] = useState(true)

  return (
    <div>
      <button onClick={() => setShowRelevant(state => !state)}>Toggle</button>
      <div>
        {items
          .filter(item => (showRelevant ? item.relevant : true))
          .map(item => (
            <TimeLineItem key={item.title} item={item} />
          ))}
      </div>
    </div>
  )
}

const timeLineItemStyles = css`
  border-bottom: 1px solid ${colors.grey};
  margin-bottom: 10px;
`

const timeLineItemTitleStyles = css`
  font-family: Vollkorn;
  font-size: 20px;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
`

const timeLineItemCompanyStyles = css`
  font-family: Vollkorn-Bold;
  font-size: 16px;
  color: ${colors.primary};
  margin: 0;
  padding: 0;
`

const timeLineItemDatesStyles = css`
  font-family: Roboto;
  font-size: 14px;
  color: ${colors.greyDark};
  margin: 0;
  padding: 0;
`

const timeLineItemLocationStyles = css`
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
`

const timeLineItemTaskListStyles = css``

const timeLineItemTaskListItemStyles = css`
  font-family: Roboto;
  font-size: 16px;
  color: ${colors.secondary};
  margin: 0;
  padding: 0;
`

const TimeLineItem = ({ item }) => {
  return (
    <div css={timeLineItemStyles}>
      <h3 css={timeLineItemTitleStyles}>{item.title}</h3>
      <p css={timeLineItemCompanyStyles}>{item.company}</p>
      <div
        css={css`
          display: flex;
        `}
      >
        <p css={timeLineItemDatesStyles}>{item.dates}</p>
        <p css={timeLineItemLocationStyles}>{item.location}</p>
      </div>
      <ul css={timeLineItemTaskListStyles}>
        {item.tasks.map(task => (
          <li css={timeLineItemTaskListItemStyles} key={task}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
