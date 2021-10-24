import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import TrustpilotContainer from "./trustpilot-container"

export default function TrustpilotReviews({
  language,
  culture,
  theme,
  height,
  width,
}) {
  const reference = React.createRef()
  const {
    sitePlugin: { template, business, username },
  } = useStaticQuery(
    graphql`
      query Trustpilot {
        sitePlugin(name: { eq: "@pittica/gatsby-plugin-trustpilot-widget" }) {
          pluginOptions
        }
      }
    `
  )

  return (
    <Fragment>
      <TrustpilotContainer
        reference={reference}
        language={language}
        culture={culture}
        theme={theme}
        height={height}
        width={width}
        template={template}
        business={business}
        username={username}
      />
    </Fragment>
  )
}

TrustpilotReviews.propTypes = {
  language: PropTypes.string,
  culture: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

TrustpilotReviews.defaultProps = {
  language: "en",
  culture: "US",
  theme: "light",
  height: "52px",
  width: "100%",
}
