import React from "react";
import Layout from "../../components/layout/index";

import AddressCard from "./components/addresscard";
import Form from "../../components/form";

export default function Contact() {
  return (
    <>
      <div className="bg-[url('/images/contactbanner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[300px] md:h-[350px] lg:h-[650px]"></div>
        </div>
      </div>
      <div className="my-10 lg:my-24 relative overflow-hidden">
        <div className="container px-4 md:px-0">
          <h2 className="font-poppins font-bold uppercase text-[#323232] text-[25px] text-center md:text-[40px] ">
            Address
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 gap-y-20 my-10 p-5 md:p-12 shadow-xl bg-white lg:mx-10">
            <AddressCard
              country="USA"
              address="Address :  Shubham Corporate Above Indusind Bank, Sapna Sangeeta Rd, near Aakash Namkeen, Indore, Madhya Pradesh "
              phone="91+ 7272727272 "
              email="abc123@gmail.com"
            />
            <AddressCard
              country="netherland"
              address="Address :  Shubham Corporate Above Indusind Bank, Sapna Sangeeta Rd, near Aakash Namkeen, Indore, Madhya Pradesh "
              phone="91+ 7272727272 "
              email="abc123@gmail.com"
            />
            <AddressCard
              country="INDIA"
              address="Address :  Shubham Corporate Above Indusind Bank, Sapna Sangeeta Rd, near Aakash Namkeen, Indore, Madhya Pradesh "
              phone="91+ 7272727272 "
              email="abc123@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className="pb-10 lg:pb-24">
        <h2 className="font-poppins font-bold uppercase my-6 tex-[22px] md:text-[40px] text-center text-[#323232]">
         Contact Us
        </h2>
        <div className="container px-10 md:px-20">
         <Form bordercolor="#323232" label="#323232" align="center" button="#323232" buttonhover="white"/>
        </div>
      </div>
    </>
  );
}
Contact.PageLayout = Layout;
