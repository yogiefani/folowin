import { Star } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Hanni Cantik",
      role: "CEO",
      content:
        "Followers bertambah dengan cepat setelah menggunakan layanan ini. Sangat merekomendasikan!",
      rating: 5,
      avatar: "HC",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Mira Indah",
      role: "Chef",
      content:
        "Hasil sesuai janji! Engagement akun saya juga meningkat drastis setelah menggunakan layanan ini.",
      rating: 5,
      avatar: "MI",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Tgl Slang",
      role: "Penari",
      content:
        "Sudah 3 kali order dan selalu puas dengan hasilnya. Terima kasih Folowin! best bgt dahh",
      rating: 5,
      avatar: "TS",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-4">
            <Star className="w-4 h-4" />
            <span>Testimoni Pelanggan</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Apa yang{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Klien
            </span>{" "}
            Kami Katakan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimoni nyata dari klien yang telah merasakan manfaat layanan kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>

                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-xl`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-purple-600 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
