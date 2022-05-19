import React from "react";
import Layout from "../../components/layout/index";
import Link from "next/link";
import Image from "next/dist/client/image";
import WorkCard from "./components/workcard";

export default function Work() {
  return (
    <>
      <div className="bg-[url('/images/workbanner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[300px] md:h-[350px] lg:h-[450px]">
            <h2 className="font-poppins font-bold uppercase text-[50px] text-white">
              Our Work
            </h2>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-3 md:mx-0 md:mt-0 mt-10 ">
         {
           new Array(12).fill(1).map((item,i)=>(
            <WorkCard key={i}
            image="/images/circle1.png"
            dec="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            />
           ))
         }
        </div>
      </div>
    </>
  );
}
Work.PageLayout = Layout;
