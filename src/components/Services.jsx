import { servicesData } from "../data/data";

function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] text-primary sm:flex-row">
      {servicesData.map((service) => {
        return (
          <div key={service.id} className=" p-[20px] text-center">
            <i
              className={`${service.icon}  rounded-full  border-[10px] border-gray bg-primary px-[23px] py-[20px]  text-xl text-white`}
            ></i>

            <h3 className="my-[10px] text-xl font-semibold">{service.title}</h3>
            <p className=" text-sm font-medium ">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
