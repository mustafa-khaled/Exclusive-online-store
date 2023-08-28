function Container({ children, styles }) {
  return <div className={`container mx-auto px-5 ${styles}`}>{children}</div>;
}

export default Container;
