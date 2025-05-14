import React from "react";

const VipSection = ({ children }) => {
  return (
    <section className="w-full h-fit flex flex-col bg-white">
      {children}
    </section>
  );
};

export default VipSection;
