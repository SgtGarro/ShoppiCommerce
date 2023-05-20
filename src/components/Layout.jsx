import PropTypes from "prop-types";

function Layout({ children }) {
  return <div className="flex flex-col mt-8 container mx-auto">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
