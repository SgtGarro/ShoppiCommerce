import PropTypes from "prop-types";

function Layout({ children }) {
  return <div className="mt-8 container mx-auto px-6 md:px-0">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
