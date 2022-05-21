const Loader = ({ size }) => {
  return (
    <div className="flex loader">
      <div
        className="loader-circle"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>

      <div
        className="loader-circle"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>

      <div
        className="loader-circle"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
    </div>
  );
};

export default Loader;
