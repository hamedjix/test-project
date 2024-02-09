import { Link, Outlet } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between align-middle p-3 bg-blue-950">
        <Link to="/" className="text-white">
          <h1 className="font-bold">Test Project</h1>
        </Link>
        <LogoutButton />
      </header>
      <div className="bg-blue-950 flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
