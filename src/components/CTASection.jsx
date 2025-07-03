const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Siap untuk Mengembangkan Sosial Media Kamu?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Mulai boosting sosial media engagement sekarang
        </p>
        <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
};

export default CTASection;
