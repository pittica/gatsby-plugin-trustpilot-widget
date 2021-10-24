import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import isReady from "../utils/is-ready"
import filterLocale from "../utils/filter-locale"

export default function TrustpilotReviews({
  language,
  culture,
  theme,
  height,
  width,
}) {
  const [ready, setReady] = useState(isReady())
  const [loaded, setLoaded] = useState(false)
  const reference = React.createRef()
  const {
    sitePlugin: {
      pluginOptions: { template, business, username },
    },
  } = useStaticQuery(
    graphql`
      query Trustpilot {
        sitePlugin(name: { eq: "@pittica/gatsby-plugin-trustpilot-widget" }) {
          pluginOptions
        }
      }
    `
  )
  const { domain, locale } = filterLocale(language, culture)
  useEffect(() => {
    setReady(isReady())
  }, [!ready])

  useEffect(() => {
    if (!loaded && ready) {
      window.Trustpilot.loadFromElement(reference.current, true)
      setLoaded(true)
    }
  }, [loaded])
  if (ready) {
    return (
      <div
        ref={reference}
        className="trustpilot-widget"
        data-locale={locale}
        data-template-id={template}
        data-businessunit-id={business}
        data-style-height={height}
        data-style-width={width}
        data-theme={theme}
      >
        <a
          href={`https://${domain}.trustpilot.com/review/${username}`}
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    )
  } else {
    return null
  }
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
