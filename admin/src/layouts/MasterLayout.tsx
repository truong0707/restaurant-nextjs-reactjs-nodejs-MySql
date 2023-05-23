import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { RiUser2Fill } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { MdVideoLabel } from "react-icons/md";
import "./MasterLayout.css";
import HeaderDashBoard from "../components/header/HeaderDashBoard";
// import HeaderDashboard from "./componentsAdmin/HeaderDashboard";

interface MasterLayoutAdminProps {
  children: React.ReactNode;
}

export default function MasterLayoutAdmin({
  children,
}: MasterLayoutAdminProps) {
  return (
    <>
      <div className="layout_admin">
        <div className="wrapp_menu_dashboard">
          <div
            className="menu_dashboard"
            style={{ color: "#172b4c" }}
          >
            <ul className="group_logo-name_admin">
              <li>
                <p className="logo"></p>
              </li>
              <li>
                <p className="name">Admin</p>
              </li>
            </ul>

            <ul
              className="list_nemu_dashboard"
              style={{ padding: 0, marginTop: "20px" }}
            >
              <Link to="/admin">
                <li>
                  <AiTwotoneHome />
                  <p>Dashboard</p>
                </li>
              </Link>

              <Link to="/admin/users">
                <li>
                  <RiUser2Fill />
                  <p>User</p>
                </li>
              </Link>

              <Link to="/admin/products">
                <li>
                  <ImUserTie />
                  <p>Product</p>
                </li>
              </Link>

              <Link to="/admin/blogs">
                <li>
                  <MdVideoLabel />
                  <p>Blog</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="wrap_content_admin">
          <HeaderDashBoard />

          {children}
        </div>
      </div>
    </>
  );
}
