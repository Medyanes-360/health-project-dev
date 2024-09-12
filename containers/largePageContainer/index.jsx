const ExtraLargePageContainer = ({ children, className }) => {
  return (
    <div className={`!container !max-w-screen-xl !px-10 !mx-auto ${className}`}>
      {children}
    </div>
  );
};
export default ExtraLargePageContainer;
