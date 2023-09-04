function UpdateItemQuantity({ currentQuantity }) {
  return (
    <div className="flex items-center gap-[10px] md:gap-3">
      <button className="rounded-full bg-gray px-[10px] py-[1px]">-</button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button className="rounded-full bg-gray px-[10px] py-[1px]">+</button>
    </div>
  );
}

export default UpdateItemQuantity;
