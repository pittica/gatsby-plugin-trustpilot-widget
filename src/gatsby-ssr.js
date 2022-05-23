import React from "react"

export { wrapRootElement } from "./gatsby-browser"

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      key="trustpilot-widget"
      type="text/javascript"
      src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
      async={true}
    />,
  ])
}
