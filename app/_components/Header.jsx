import Image from "next/image";
import React from "react";

function Header() {
  return <div>
    <div className="left">
      <Image src={'/logo.svg'} width={200} height={200} alt="logo"/>
      <ul>
        <li>For Sale</li>
        <li>For Rent</li>
        <li>Agent finder </li>
      </ul>
    </div>
    <div className="right">
      
    </div>
  </div>;
}

export default Header;
