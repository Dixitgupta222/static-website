import React from "react";
import MemberCard from "./memberCard";

export default function Team() {
  const teamData = [
   { 'name':'Chetan Meena','designation':'Co-Founder','image':'chetanmeena.png'},
  //  { 'name':'Sanjeev Kumar','designation':'Co-Founder','image':'avatar.png'},
   { 'name':'Atin Kumar',	'designation':'CTO','image':'atinkumar.png'},
   { 'name':'Manish Mehra','designation':'','image':'manishmehra.png'},
   { 'name':'Chetan Prajapat','designation':'','image':'chetanprajapat.png'},
   { 'name':'Deepak Jadhav','designation':'','image':'deepakjadhav.png'},

  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-5 items-center">
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
