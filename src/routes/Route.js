import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import ExternalLayout from "../pages/_layouts/external";
import InternalLayout from "../pages/_layouts/internal";

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const Layout = isPrivate ? InternalLayout : ExternalLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
