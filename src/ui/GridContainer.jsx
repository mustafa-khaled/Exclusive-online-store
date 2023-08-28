function GridContainer({ children, styles }) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-10 ${styles}`}
    >
      {children}
    </div>
  );
}

export default GridContainer;
