function GridContainer({ children, styles, cols }) {
  return <div className={`grid ${cols} gap-10 ${styles}`}>{children}</div>;
}

export default GridContainer;
// grid-cols-[repeat(auto-fill,minmax(230px,1fr))]
