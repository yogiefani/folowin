const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-2xl animate-bounce"></div>

      <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute bottom-40 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-3000"></div>
    </div>
  );
};
export default AnimatedBackground;
