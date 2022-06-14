import React from "react";
import MemberCard from "./memberCard";

export default function Team() {
  const teamData = [
   { 'name':'Chetan Meena','designation':'Co-Founder','image':'chetanmeena.png'},
   { 'name':'Sanjeev Kumar','designation':'Co-Founder','image':''},
   { 'name':'Atin Kumar',	'designation':'CTO','image':'atinkumar.jpg'},
   { 'name':'Manish Mehra','designation':'','image':'manishmehra.jpg'},
   { 'name':'Chetan Prajapat','designation':'','image':''},
   { 'name':'Deepak Jadhav','designation':'','image':''},

  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-5 items-center">
      {teamData.map((item, i) => (
        <MemberCard
          key={i}
          img={`/images/${item.image}`}
          name={item.name}
          designation={item.designation}
        />
      ))}
    </div>
  );
}
