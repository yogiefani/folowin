import React from "react";
import { Eye, Gift, Shield, TrendingUp, Timer } from "lucide-react";
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Pilih Layanan",
      desc: "Dapatkan followers dengan cara cepat dan mudah",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Pilih Paket",
      desc: "Pilih paket yang sesuai dengan kebutuhan Anda",
      icon: <Gift className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Bayar",
      desc: "Pembayaran mudah dan aman",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Lihat Perkembangan",
      desc: "Followers akan bertambah dalam hitungan menit",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white mb-4">
            <Timer className="w-4 h-4" />
            <span>Proses Super Cepat</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Cara{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Kerja
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Dapatkan followers dengan cara yang mudah dan efektif dalam 4
            langkah sederhana
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  {step.number}
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center group-hover:animate-bounce">
                  {step.icon}
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-x-1/2"></div>
                )}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-purple-200">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
