import PropTypes from "prop-types";

const Link = ({ route }) => {
  const { path, name } = route;

  return (
    <li className="mr-10 px-6 hover:bg-violet-500">
      <a href={path}>{name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.require,
};

export default Link;
