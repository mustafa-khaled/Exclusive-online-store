//  Styles Box For ( Categories in home page & Statistics in about page )

function SmallBox({ children }) {
  return (
    <div
      className={`  border-[2px] border-gray p-[20px] py-[30px] text-center text-2xl  hover:bg-secondary hover:text-white`}
    >
      {children}
    </div>
  );
}

export default SmallBox;
