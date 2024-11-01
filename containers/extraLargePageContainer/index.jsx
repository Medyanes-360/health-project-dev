const ExtraLargePageContainer = ({ id, children, className, style }) => {
  return (
    <div
      id={id}
      style={{ ...style }}
      className={`!container !max-w-screen-xl px-4 lg:px-10 !mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
export default ExtraLargePageContainer;
