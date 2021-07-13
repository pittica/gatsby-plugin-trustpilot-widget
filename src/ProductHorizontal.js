import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import templates from './templates';
import TrustpilotContainer from './TrustpilotContainer';
import useSitePluginOptions from './hooks/useSitePluginOptions';

const Horizontal = ({ language, culture, theme, height, width, stars, sku }) => {
  const reference = React.createRef();
  const { business, username } = useSitePluginOptions();

  return (
    <Fragment>
      <TrustpilotContainer
        reference={reference}
        template={templates.Horizontal}
        business={business}
        username={username}
        language={language}
        culture={culture}
        theme={theme}
        height={height}
        width={width}
        stars={stars}
        sku={sku}
      />
    </Fragment>
  );
};

Horizontal.propTypes = {
  language: PropTypes.string,
  culture: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  stars: PropTypes.number,
  sku: PropTypes.sku
};

Horizontal.defaultProps = {
  language: 'en',
  culture: 'US',
  theme: 'light',
  height: '52px',
  width: '100%',
  stars: 5,
};

export default Horizontal;
