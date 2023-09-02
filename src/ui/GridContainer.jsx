function GridContainer({ children, styles, cols }) {
  return <div className={`grid ${cols} gap-10 ${styles}`}>{children}</div>;
}

export default GridContainer;
