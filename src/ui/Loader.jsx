function Loader({ styles }) {
  return (
    <div className={`${styles}`}>
      <div
        className={
          " h-20 w-20 animate-spin rounded-full border-8 border-gray border-t-primary"
        }
      />
    </div>
  );
}

export default Loader;
