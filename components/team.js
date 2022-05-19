import React from "react";
import MemberCard from "./memberCard";

export default function Team() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-5 items-center">
        {new Array(10).fill(1).map((item,i) => (
        <MemberCard key={i} img="/images/arjunpatel.png" name="Arjun Patel" designation="Web Developer"/>
        ))}
    </div>

  );
}
