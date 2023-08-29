const services = [
  {
    id: 1,
    icon: "fa-solid fa-headset",
    title: "Free And Fast Delivery",
    description: " Free Delivery For All Orders Over $140",
  },

  {
    id: 2,
    icon: "fa-solid fa-truck-fast ",
    title: "24/7 Costumer Service",
    description: "Friendly 24/7 Customer Support",
  },

  {
    id: 3,
    icon: "fa-regular fa-circle-check",
    title: "Money Back Guarantee",
    description: "We Return Money Within 30 Days",
  },
];

function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] text-primary sm:flex-row">
      {services.map((service) => {
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
