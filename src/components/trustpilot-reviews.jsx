import React, { useState, useEffect, useRef, useContext } from "react"
import PropTypes from "prop-types"

import TrustpilotContext from "../context/trustpilot-context"
import filterLocale from "../utils/filter-locale"

export default function TrustpilotReviews(props) {
  const {
    language,
    culture,
    theme,
    height,
    width,
    template,
    business,
    username,
  } = { ...props, ...useContext(TrustpilotContext) }

  if (template && business && username) {
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
  template: PropTypes.string,
  business: PropTypes.string,
  username: PropTypes.string,
}
