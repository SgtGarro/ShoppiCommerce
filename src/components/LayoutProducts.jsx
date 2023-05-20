import PropTypes from "prop-types";
function LayoutProducts({ children }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7  gap-4">
      {children}
    </div>
  );
}

LayoutProducts.propTypes = {
  children: PropTypes.array,
};
export default LayoutProducts;
