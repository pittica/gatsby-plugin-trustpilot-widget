import React, { useState, useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import filterLocale from "../utils/filter-locale"

export default function TrustpilotReviews({
  language,
  culture,
  theme,
  height,
  width,
  template,
  business,
  username,
}) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef()
  const { domain, locale } = filterLocale(language, culture)

  useEffect(() => {
    if (typeof window !== "undefined" && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true)
      setLoaded(true)
    }
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
      <Helmet>
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async={true}
        />
      </Helmet>
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
  template: PropTypes.string.isRequired,
  business: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

TrustpilotReviews.defaultProps = {
  language: "en",
  culture: "US",
  theme: "light",
  height: "52px",
  width: "100%",
}
