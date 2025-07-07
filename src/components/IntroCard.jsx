import ProcessGrid from "./ProcessCard";

const IntrCard = () => {
  return (
    <div className="w-full py-10" dir="rtl">
      {/* Main Content */}
      <div className="space-y-12 text-center">
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            خدمات ما در میدان فوتسال
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            ما در میدان فوتسال خدماتی سریع و حرفه‌ای برای رزرو تایم، مدیریت تیم‌ها و برگزاری مسابقات ارائه می‌دهیم. فقط با چند کلیک ساده می‌توانید زمان بازی خود را ثبت کنید و با تیم خود وارد میدان شوید. همچنین، سیستم ما امکان برنامه‌ریزی دقیق و پشتیبانی ۲۴ ساعته را نیز فراهم کرده است.
          </p>
        </div>

        {/* Process Cards */}
        <div className="w-full h-auto">
          <ProcessGrid />
        </div>
      </div>
    </div>
  );
};

export default IntrCard;
