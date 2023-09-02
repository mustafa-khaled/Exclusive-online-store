function SectionHead({ head, description, operations }) {
  return (
    <div className="mb-[20px] flex items-end justify-between">
      <div className="">
        <div className=" mb-[10px] flex items-center gap-[10px]">
          <div
            className="h-[30px] w-[10px] bg-secondary
          "
          ></div>

          <p className="  text-lg	 font-semibold text-secondary">
            {description}
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-primary">{head}</h2>
      </div>

      {operations && <div>{operations}</div>}
    </div>
  );
}

export default SectionHead;
