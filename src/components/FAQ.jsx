import Button from "../components/Button";

const FAQ = () => {
  return (
    <div className="w-full mx-auto sm:px-10 my-8" dir="rtl">
      {/* Main Content */}
      <div className="space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            سوالات خود را سریع و آسان حل کنید
          </h1>
          <p className="text-gray-600 mt-2">
            از نظرات بازیکنان و تیم ما بهره‌مند شوید، مشکلات رزرو تایم و بازی را
            با کمک ما حل کنید و تجربه بهتری در میدان فوتسال داشته باشید.
          </p>
        </div>

        {/* Checkmark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              "رزرو ناقص تایم بازی",
              "عدم حضور مسئول جهت راهنمایی",
              "استرس و نگرانی در انتخاب زمین",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {[
              "برنامه‌های پراسترس",
              "پاسخ نگرفتن به سوالات",
              "نبود تیم پشتیبانی خلاق",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t">
          <div className="flex flex-wrap gap-6 items-center justify-between mt-6">
            <Button text="درخواست مشاوره" />

            <div className="flex items-center gap-6">
              <a
                href="#chat"
                className="text-blue-500 font-semibold hover:text-emerald-600 
                  flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                گفتگو آنلاین
              </a>
              <div className="text-gray-600 font-medium">۰۷۹۹-۱۲۳-۴۵۶</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
