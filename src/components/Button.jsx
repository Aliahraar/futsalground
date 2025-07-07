export default function SimpleButton({ text, className = "" }) {
  return (
    <button
      className={`
        relative 
        overflow-hidden 
        px-6 py-2.5
        rounded-md 
        font-medium 
        text-white 
        bg-gradient-to-r 
        from-indigo-500 
        to-blue-500 
        transition-all 
        duration-300 
        transform 
        hover:from-indigo-600 
        hover:to-blue-600 
        hover:scale-[1.02]
        shadow-md 
        hover:shadow-lg
        group
        ${className}
      `}
    >
      {/* Subtle background animation */}
      <div
        className={`
          absolute 
          inset-0 
          bg-white/10 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300
        `}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center gap-2 ">
        <span className="transition-transform duration-300 group-hover:-translate-y-1 text-center">
          {text}
        </span>
      </div>
    </button>
  );
}
