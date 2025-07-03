import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah followers yang didapat aman dan tidak akan hilang?",
      answer:
        "Ya, kami menggunakan metode yang aman dan followers yang kami berikan memiliki retensi tinggi.",
    },
    {
      question: "Berapa lama proses penambahan followers?",
      answer:
        "Proses mulai dalam 24 jam dan selesai dalam 2-7 hari tergantung jumlah pesanan.",
    },
    {
      question: "Apakah perlu memberikan password akun?",
      answer:
        "Tidak, kami hanya membutuhkan username atau link akun, tidak perlu password.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
          <p className="text-xl text-gray-600">Frequently Asked Question</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
