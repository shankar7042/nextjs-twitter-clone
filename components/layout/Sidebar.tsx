import { RiHome7Fill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: RiHome7Fill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUserAlt,
      auth: true,
    },
  ];
  return (
    <div className="h-full col-span-1 pr-4 md:pd-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              auth={item.auth}
            />
          ))}
          {currentUser && (
            <SidebarItem
              label="Logout"
              onClick={() => signOut()}
              icon={BiLogOut}
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
