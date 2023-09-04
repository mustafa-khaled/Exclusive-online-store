import React from "react";

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
        onClick={() => handleQuantityDecrease(item.id, currentQuantity - 1)}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        disabled={isUpdating}
        className="rounded-full bg-gray px-[10px] py-[1px]"
        onClick={() => handleQuantityIncrease(item.id, currentQuantity + 1)}
      >
        +
      </button>
    </div>
  );
}

export default React.memo(UpdateItemQuantity);
