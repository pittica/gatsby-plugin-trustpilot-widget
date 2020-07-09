import React, { Fragment } from "react";
import PropTypes from "prop-types";
import templates from "./templates";
import TrustpilotContainer from "./TrustpilotContainer";
import useSitePluginOptions from "./hooks/useSitePluginOptions";

const TrustpilotReviews = ({
  language,
  culture,
  theme,
  height,
  width,
  stars,
}) => {
  const reference = React.createRef();

  const { business, username } = useSitePluginOptions();
  return (
    <Fragment>
      <TrustpilotContainer
        reference={reference}
        language={language}
        culture={culture}
        theme={theme}
        height={height}
        width={width}
        template={templates.List}
        business={business}
        username={username}
        stars={stars}
      />
    </Fragment>
  );
};

TrustpilotReviews.propTypes = {
  language: PropTypes.string,
  culture: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  stars: PropTypes.number,
};

TrustpilotReviews.defaultProps = {
  language: "en",
  culture: "US",
  theme: "light",
  height: "52px",
  width: "100%",
};

export default TrustpilotReviews;
