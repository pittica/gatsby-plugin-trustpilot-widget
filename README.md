# pittica/gatsby-plugin-trustpilot-widget

![License](https://img.shields.io/github/license/pittica/gatsby-plugin-trustpilot-widget)
![Version](https://img.shields.io/github/package-json/v/pittica/gatsby-plugin-trustpilot-widget)
![Release](https://img.shields.io/github/v/release/pittica/gatsby-plugin-trustpilot-widget)
![Gatsby Version](https://img.shields.io/npm/dependency-version/@pittica/gatsby-plugin-trustpilot-widget/peer/gatsby)
![React Version](https://img.shields.io/github/package-json/dependency-version/pittica/gatsby-plugin-trustpilot-widget/react)

## Description

[Trustpilot](https://www.trustpilot.com/) widget for [GatsbyJS](https://www.gatsbyjs.org/).

## Install

[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-trustpilot-widget)](https://www.npmjs.com/package/@pittica/gatsby-plugin-trustpilot-widget)
[![npm](https://img.shields.io/npm/dm/@pittica/gatsby-plugin-trustpilot-widget)](https://www.npmjs.com/package/@pittica/gatsby-plugin-trustpilot-widget)

```shell
npm install @pittica/gatsby-plugin-trustpilot-widget
```

## Component Usage

The _username_, _template_ and _business_ fields **are required**.

You can get the data from the TrustBox in your businness panel on [Trustpilot](https://www.trustpilot.com/)

```HTML
<!-- TrustBox widget - Review Collector -->
<div class="trustpilot-widget" data-locale="en-US" data-template-id="TEMPLATE_ID" data-businessunit-id="BUSINESSUNIT_ID" data-style-height="52px" data-style-width="100%">
  <a href="https://en.trustpilot.com/review/USERNAME" target="_blank" rel="noopener">Trustpilot</a>
</div>
<!-- End TrustBox widget -->
```

Import the component **TrustpilotReviews** in your component.

```javascript
import TrustpilotReviews from "@pittica/gatsby-plugin-trustpilot-widget"
```

Use it in your code as component.

```javascript
class MyComponent extends React.Component {
  render() {
    return (
      <TrustpilotReviews
        language="en"
        culture="US"
        theme="light"
        width="100%"
        height="52px"
        template="TEMPLATE_ID"
        business="BUSINESSUNIT_ID"
        username="USERNAME"
      />
    )
  }
}
```

### Attributes

The component has optional attributes which the user can use to set the aspect of the TrustBox.

#### language

Sets the language of the locale and the language of the API.

##### Default Value

`en`

##### Note

If you set the language attribute you have to set the _culture_ attribute too.

#### culture

Sets the culture of the locale.

##### Default Value

`US`

##### Note

If you set the culture attribute you have to set the _language_ attribute too.

#### theme

Sets the UI theme of the TrustBox.

##### Values

- `light`
- `dark`

##### Default value

`light`

#### width

Sets the width of the widget.

##### Default Value

`100%`

#### height

Sets the height of the widget.

##### Default Value

`52px`

#### template

Indicates the template ID.

#### business

Indicates the business ID.

#### username

Indicates the username.

## Copyright

(c) 2020-2021, [Pittica S.r.l.](https://pittica.com).
