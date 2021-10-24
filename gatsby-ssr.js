import React from "react"

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      key="pittica-trustpilot"
      type="text/javascript"
      src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
      async={true}
      key="trustpilot-widget"
    />,
  ])
}
