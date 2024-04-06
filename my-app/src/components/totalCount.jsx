import React, { useState } from "react";
import Select from "react-select";
import services from "./services.json";

import styles from "./totalCount.module.scss"

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
        className="px-4"
      />
    
    
    <ul className="flex flex-col py-4  ">
    {selectedServices.map(service => (
            <li className="flex justify-between" key={service.value}>
              <p>{service.value}</p>
              <p className="py-4">${service.price}</p>               
            </li>
            
          ))}
    </ul>
<p className="pb-[40px]">Total Price: ${totalPrice()}</p>

    </div>
  );
};

export default TotalCount;
