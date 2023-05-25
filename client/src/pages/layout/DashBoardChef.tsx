import React from "react";
import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
import { RiUser2Fill } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { MdVideoLabel } from "react-icons/md";
import styles from '@/styles/layout/dashBoardChef.module.css'
import Footer from "@/components/Footer/Footer";

interface MasterLayoutAdminProps {
  children: React.ReactNode;
}

export default function DashBoardChef({
  children,
}: MasterLayoutAdminProps) {
  return (
    <>
      <div className={styles.layout_dashboard}>
        <div className={styles.wrapp_menu_dashboard}>
          <div
            className={styles.menu_dashboard}
            style={{ color: "#172b4c" }}
          >
            <ul className={styles.group_logo_name_chef}>
              <li>
                <p className={styles.logo}></p>
              </li>
              <li>
                <p className={styles.name}>Admin</p>
              </li>
            </ul>

            <ul
              className={styles.list_nemu_dashboard}
              style={{ padding: 0, marginTop: "20px" }}
            >
              <Link className={styles.link} href="/admin">
                <li>
                  <AiTwotoneHome />
                  <p className={styles.item}>Dashboard</p>
                </li>
              </Link>

              <Link className={styles.link} href="/admin/users">
                <li>
                  <RiUser2Fill />
                  <p className={styles.item}>User</p>
                </li>
              </Link>

              <Link className={styles.link} href="/admin/products">
                <li>
                  <ImUserTie />
                  <p className={styles.item}>Product</p>
                </li>
              </Link>

              <Link className={styles.link} href="/admin/blogs">
                <li>
                  <MdVideoLabel />
                  <p className={styles.item}>Blog</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className={styles.wrap_content_admin}>
          {/* <HeaderDashBoard /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
