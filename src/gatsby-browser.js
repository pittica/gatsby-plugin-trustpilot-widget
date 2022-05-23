import React from "react"

import TrustpilotContext from "./context/trustpilot-context"

export function wrapRootElement({ element }, pluginOptions) {
  return (
    <TrustpilotContext.Provider value={pluginOptions}>
      {element}
    </TrustpilotContext.Provider>
  )
}
