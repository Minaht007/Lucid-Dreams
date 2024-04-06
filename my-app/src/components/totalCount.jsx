import React, { useState } from "react";
import Select from "react-select";
import services from "./services.json";



const TotalCount = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const options = services.map(service => ({
    value: service.name,
    label: service.name,
    price: service.price
  }));

  const handleChange = (selectedOptions) => {
    setSelectedServices(selectedOptions);
  };

  const totalPrice = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  return (
    <div className="flex flex-col w-[600px] mx-auto pt-10 border-[1px] bg-[#dcfce7] ">
      
      <Select
        isMulti
        options={options}
        value={selectedServices}
        onChange={handleChange}
        placeholder="select a service"
        className="px-4 text-[#0ea5e9]"
      />
    
    
    <ul className="flex flex-col py-4  ">
    {selectedServices.map(service => (
            <li className="flex justify-between px-4" key={service.value}>
             <p>{service.value.charAt(0).toUpperCase() + service.value.slice(1)}</p>
              <p className="py-4">${service.price}</p>               
            </li>
            
          ))}
    </ul>
<p className=" flex justify-between px-4 pb-[40px]">Total Price: ${totalPrice()}</p>

    </div>
  );
};

export default TotalCount;
