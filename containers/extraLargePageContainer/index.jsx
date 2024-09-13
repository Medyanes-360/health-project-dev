const ExtraLargePageContainer = ({ children, className, style }) => {
  return (
    <div
      style={{ ...style }}
      className={`!container !max-w-screen-xl px-4 lg:px-10 !mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
export default ExtraLargePageContainer;
