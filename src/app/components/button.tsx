import React from "react";

type ButtonProps = {
  onClick: (event: React.FormEvent) => void;
  text?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, text = "Login" }) => {
  return (
    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
      <button
        type="submit"
        className="inline-block w-full sm:w-auto shrink-0 rounded-md border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white transition 
                  hover:bg-transparent hover:text-red-600 focus:ring-3 focus:ring-red-300 focus:outline-none"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
