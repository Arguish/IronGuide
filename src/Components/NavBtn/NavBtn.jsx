import React from "react";
import { useNavigate } from "react-router-dom";

const NavBtn = ({ to, text }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-slate-400 rounded-2xl px-4 py-2 m-2 hover:ring-4 hover:ring-indigo-500"
      onClick={() => navigate(to)}
    >
      {text || to}
    </button>
  );
};

export default NavBtn;
