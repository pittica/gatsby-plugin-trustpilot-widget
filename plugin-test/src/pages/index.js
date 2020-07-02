import React from "react"
import { List, MicroStar } from "@dadoagency/gatsby-plugin-trustpilot-widget"

const IndexPage = () => {
    console.log('fire')
    return (
        <div>
            <List height={"400px"} />
            <MicroStar />
        </div>
    )
}

export default IndexPage
