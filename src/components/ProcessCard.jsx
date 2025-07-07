// const ProcessGrid = () => {
//   // Card content data
//  const cards = [
//   {
//     title: "ایجاد برنامه بازی",
//     content: "ما با برنامه‌ریزی دقیق برای تایم‌های بازی شروع می‌کنیم و روند رزرو را مشخص می‌نماییم."
//   },
//   {
//     title: "تحقیق و بررسی زمین‌ها",
//     content: "ارزیابی زمین‌های موجود و شرایط مناسب برای هر بازی."
//   },
//   {
//     title: "رزرو اولیه",
//     content: "ثبت اولیه زمان بازی با توجه به درخواست شما."
//   },
//   {
//     title: "تأیید نهایی",
//     content: "اطلاع‌رسانی و تأیید زمان رزرو برای بازیکنان."
//   },
//   {
//     title: "شروع بازی",
//     content: "امیدواریم از بازی خود لذت ببرید!"
//   }
// ];


//   return (
//     <div className="h-auto">
//       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {cards.map((card, index) => (
//           <ProcessCard 
//             key={index}
//             title={card.title}
//             content={card.content}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Updated ProcessCard component
// const ProcessCard = ({ title, content }) => {
//   return (
//     <div className="group relative h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
//       <div className="space-y-6">
//         {/* Header */}
//         <div className="flex items-center gap-4">
//           <div className="p-3 bg-blue-100 rounded-lg">
//             <svg 
//               className="w-8 h-8 text-blue-600"
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//           </div>
//           <h3 className="text-2xl text-left font-bold text-gray-800">{title}</h3>
//         </div>

//         {/* Content */}
//         <p className="text-gray-600 text-left leading-relaxed pl-4 border-l-2 border-blue-100">
//           {content}
//         </p>
//       </div>
      
//       {/* Hover Effect */}
//       <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-50 rounded-2xl transition-all pointer-events-none"></div>
//     </div>
//   );
// };

// export default ProcessGrid;

import { useEffect, useState } from "react";

const ProcessGrid = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/reservation-steps")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-auto" dir="rtl">
      {loading ? (
        <p className="text-center text-gray-500">در حال بارگذاری...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ProcessCard key={index} title={card.title} content={card.content} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProcessCard = ({ title, content }) => {
  return (
    <div className="group relative h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-right">
      <div className="space-y-6">
        <div className="flex items-center gap-4 flex-row-reverse">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed pr-4 border-r-2 border-blue-100">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProcessGrid;
