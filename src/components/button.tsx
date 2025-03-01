import { Link, useLocation } from "react-router-dom";

interface SidebuttonProps {
  to: string; // Defines the type for the 'to' prop
  children: React.ReactNode; // Allows any valid React element inside
}

export default function Sidebutton({ to, children }: SidebuttonProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`size-14 flex items-center justify-center rounded-full transition-all
        ${isActive ? "bg-amber-200 text-white" : "bg-amber-100 hover:bg-amber-200"}`}
    >
      {children}
    </Link>
  );
}
