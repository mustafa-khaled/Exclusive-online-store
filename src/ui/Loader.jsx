function Loader({ styles, isSmall = false }) {
  return (
    <div className={`${styles}`}>
      <div
        className={`${
          isSmall ? "h-[5px] w-[5px]" : "h-20 w-20"
        }  animate-spin rounded-full border-8 border-gray border-t-primary`}
      />
    </div>
  );
}

export default Loader;
