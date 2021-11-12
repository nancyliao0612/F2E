import React from "react";
// import { IoIosSearch } from "react-icons/io";
// import { VscAccount } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-block">
        <AiOutlineMenu />
        <div>
          <AiOutlineUser className="user" />
        </div>

        {/* <span>活動新訊</span>
      <span>｜</span>
      <span>景點</span>
      <span>｜</span>
      <span>美食</span>
      <span>｜</span>
      <span>住宿</span>
      <span>｜</span>
      <span>交通&nbsp;</span> */}
        {/* <IoIosSearch /> */}
        {/* <VscAccount id="account" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
