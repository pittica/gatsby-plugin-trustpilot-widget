import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import filterLocale from "../utils/filter-locale"

export default function TrustpilotReviews({
  language,
  culture,
  theme,
  height,
  width,
}) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef()
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
    if (typeof window !== "undefined" && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true)
      setLoaded(true)
    }

    console.log(loaded)
  }, [loaded])

  return (
    <div
      ref={ref}
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
