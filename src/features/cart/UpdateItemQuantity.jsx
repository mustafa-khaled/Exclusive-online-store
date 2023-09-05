function UpdateItemQuantity({
  item,
  handleQuantityDecrease,
  handleQuantityIncrease,
  isUpdating,
}) {
  const currentQuantity = item.count;

  return (
    <div className="flex items-center gap-[10px] md:gap-3">
      <button
        disabled={isUpdating}
        className="rounded-full bg-gray px-[10px] py-[1px]"
        onClick={handleQuantityDecrease}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        disabled={isUpdating}
        className="rounded-full bg-gray px-[10px] py-[1px]"
        onClick={handleQuantityIncrease}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
