// components/Form.jsx

import Button from "./Button";
import InputField from "./InputField";
import SelectBox from "./SelectBox";

import React, { useState } from 'react';

function Form() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    playersCount: '',
    reservationDate: '',
    reservationTime: '',
    notes: '',
  });

  // Update formData on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // On form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally validate data here

    fetch('http://localhost:8000/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        alert('رزرو با موفقیت ثبت شد!');
        // Reset form if needed
        setFormData({
          fullName: '',
          phone: '',
          playersCount: '',
          reservationDate: '',
          reservationTime: '',
          notes: '',
        });
      })
      .catch(err => {
        console.error('Error:', err);
        alert('خطا در ارسال اطلاعات.');
      });
  };

  return (
    <div className="w-full h-auto bg-gray-100 rounded-4xl" dir="rtl">
      <div className="w-auto bg-gray-50 rounded-xl shadow-md py-4 px-5 max-w-3xl mx-auto">
        <h2 className="font-bold text-gray-600 text-center mb-8 text-xl">
          فرم رزرو میدان فوتسال
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <InputField
              label="نام کامل *"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              label="شماره تماس *"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              label="تعداد بازیکنان *"
              type="number"
              name="playersCount"
              required
              value={formData.playersCount}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectBox
                label="انتخاب تاریخ رزرو *"
                name="reservationDate"
                options={["امروز", "فردا", "پس‌فردا", "یک تاریخ دیگر"]}
                value={formData.reservationDate}
                onChange={handleChange}
              />
              <SelectBox
                label="انتخاب ساعت رزرو *"
                name="reservationTime"
                options={[
                  "06:00 - 07:00 صبح",
                  "07:00 - 08:00 صبح",
                  "04:00 - 05:00 عصر",
                  "05:00 - 06:00 عصر",
                  "06:00 - 07:00 شب",
                  "07:00 - 08:00 شب",
                ]}
                value={formData.reservationTime}
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                rows="4"
                name="notes"
                placeholder="توضیحات بیشتر (اختیاری)"
                className="block w-full rounded-md border text-black border-gray-300 shadow-sm focus:border-[#00c0ff] focus:ring-[#00c0ff] px-3 py-2 text-sm"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="w-full">
            <Button text="ثبت رزرو" className="w-full text-center" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;



