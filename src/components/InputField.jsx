import React from "react";

function InputField({ label, type = "text", required = false }) {
  return (
    <div>
      <input
        type={type}
        required={required}
        placeholder={label}
        className="py-2 px-3 block w-full rounded-md border text-black border-gray-300 shadow-sm focus:border-[#00c0ff] focus:ring-[#00c0ff] text-sm"
      />
    </div>
  );
}

export default InputField;