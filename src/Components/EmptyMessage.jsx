import propTypes from "prop-types";

const EmptyMessage = ({ message }) => {
  return (
    <h1
      className="empty-message text-center text-xl md:text-2xl"
      style={{ paddingTop: "1em" }}
    >
      {message}
    </h1>
  );
};

EmptyMessage.propTypes = {
  message: propTypes.string.isRequired,
};

export default EmptyMessage;
