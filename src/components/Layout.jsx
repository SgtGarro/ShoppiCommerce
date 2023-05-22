import PropTypes from "prop-types";

function Layout({ children }) {
  return <div className="my-10 container mx-auto px-6 md:px-0">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
