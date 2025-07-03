import React, { useState, useEffect } from "react";
import {
  Zap,
  Sparkles,
  TrendingUp,
  Shield,
  Timer,
  Crown,
  Gift,
  Instagram,
  Facebook,
  Music,
  Check,
} from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 min-h-screen overflow-hidden"
    >
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 text-sm font-medium text-purple-700 animate-pulse">
              <Zap className="w-4 h-4" />
              <span>Boost Instan dalam 24 Jam!</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              Tingkatkan
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                {" "}
                Kredibilitas{" "}
              </span>
              Sosial Media Anda
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Layanan penambahan followers Instagram, TikTok, dan Facebook yang
              <span className="text-purple-600 font-semibold">
                {" "}
                aman, cepat, dan terpercaya
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Mulai Sekarang</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Lihat Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>100% Aman</span>
              </div>
              <div className="flex items-center space-x-2">
                <Timer className="w-5 h-5 text-blue-500" />
                <span>Proses 24 Jam</span>
              </div>
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-yellow-500" />
                <span>Kualitas Premium</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative transform transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${mousePosition.y * 0.5}deg) rotateY(${
                  mousePosition.x * 0.5
                }deg)`,
              }}
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl"></div>

                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Social Growth
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Boost your digital presence instantly
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Instagram className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">
                        Instagram
                      </span>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Facebook className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">
                        Facebook
                      </span>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Music className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">
                        TikTok
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-1 text-green-500">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Verified</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-500">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">Secure</span>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-500">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm">Fast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Gift className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
