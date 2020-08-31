import React, { Fragment } from "react";
import PropTypes from "prop-types";
import templates from "./templates";
import TrustpilotContainer from "./TrustpilotContainer";
import useSitePluginOptions from "./hooks/useSitePluginOptions";

const MicroCombo = ({ language, culture, theme, height, width }) => {
  const reference = React.createRef();
  const { business, username } = useSitePluginOptions();

  return (
    <Fragment>
      <TrustpilotContainer
        reference={reference}
        template={templates.MicroCombo}
        business={business}
        username={username}
        language={language}
        culture={culture}
        theme={theme}
        height={height}
        width={width}
      />
    </Fragment>
  );
};

MicroCombo.propTypes = {
  language: PropTypes.string,
  culture: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  stars: PropTypes.number,
};

MicroCombo.defaultProps = {
  language: "en",
  culture: "US",
  theme: "light",
  height: "52px",
  width: "100%",
};

export default MicroCombo;
