import React from "react";
import { Instagram, Facebook, Music, Zap, Sparkles } from "lucide-react";
const ServicesSection = () => {
  const services = [
    {
      platform: "Instagram",
      icon: <Instagram className="w-12 h-12 text-pink-600" />,
      description: "Paket followers Instagram dan like aktif",
      gradient: "from-pink-500 to-rose-500",
      packages: [
        { type: "Followers", range: "100-20000", price: "15K - 150K" },
        { type: "Likes", range: "50-5000", price: "10K - 75K" },
        { type: "Views", range: "100-50000", price: "20K - 200K" },
      ],
    },
    {
      platform: "Facebook",
      icon: <Facebook className="w-12 h-12 text-blue-600" />,
      description: "Paket followers Facebook dengan engagement tinggi",
      gradient: "from-blue-500 to-cyan-500",
      packages: [
        { type: "Followers", range: "100-15000", price: "20K - 180K" },
        { type: "Likes", range: "200-8000", price: "15K - 100K" },
        { type: "Views", range: "500-80000", price: "30K - 300K" },
      ],
    },
    {
      platform: "TikTok",
      icon: <Music className="w-12 h-12 text-gray-800" />,
      description: "Paket followers TikTok VIP dengan kualitas terbaik",
      gradient: "from-gray-800 to-gray-600",
      packages: [
        { type: "Followers", range: "1000-50000", price: "50K - 500K" },
        { type: "Likes", range: "500-25000", price: "30K - 300K" },
        { type: "Views", range: "1000-500000", price: "40K - 400K" },
      ],
    },
  ];

  return (
    <section
      id="layanan"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Layanan Terpopuler</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Layanan{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berbagai paket followers yang disesuaikan dengan kebutuhan brand
            Anda untuk pertumbuhan yang maksimal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:animate-pulse`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.platform}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="space-y-4">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className="flex justify-between items-center p-4 bg-gray-50/80 backdrop-blur-sm rounded-xl hover:bg-gray-100/80 transition-colors duration-300"
                    >
                      <span className="font-medium text-gray-700 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>
                          {pkg.type} ({pkg.range})
                        </span>
                      </span>
                      <span className="text-purple-600 font-bold">
                        {pkg.price}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-6 bg-gradient-to-r ${service.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group`}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Pesan Layanan {service.platform}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
