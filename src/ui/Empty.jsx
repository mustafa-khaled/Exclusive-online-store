function Empty({ resource }) {
  return (
    <div className="text-darkGray flex h-[80vh] flex-col items-center justify-center gap-[20px]">
      <i className="fa-solid fa-circle-info text-[40px]"></i>
      <h3>{resource}</h3>
    </div>
  );
}

export default Empty;
