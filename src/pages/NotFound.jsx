import { Link } from "react-router-dom";
import { Frown, Home, Sparkles, Orbit, Navigation, Satellite, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // إنشاء جسيمات متحركة
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.speedX) % 100,
        y: (p.y + p.speedY) % 100,
      })));
    }, 50);

    // تتبع حركة الماوس
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 flex items-center justify-center relative overflow-hidden bg-linear-to-b from-dark-purple via-dark-blue to-dark-purple">
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        {/* جسيمات متحركة */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-pink/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${3 + particle.id * 0.2}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}

        {/* دوائر متحركة */}
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-linear-to-r from-purple/5 to-pink/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-r from-blue/5 to-purple/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
      </div>

      {/* تأثير الماوس */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-linear-to-r from-purple/10 to-transparent blur-2xl transition-all duration-300 pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* محتوى الصفحة */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-8">
        <div className="text-center">
          {/* أيقونات متحركة */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40">
              {/* أيقونة متحركة مركزية */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-purple to-pink rounded-full blur-xl opacity-50 animate-ping"></div>
                  <div className="relative w-28 h-28 rounded-full bg-linear-to-br from-dark-purple to-dark-blue border-2 border-purple/30 flex items-center justify-center shadow-2xl">
                    <Frown size={56} className="text-pink animate-bounce" />
                  </div>
                </div>
              </div>

              {/* أقمار صناعية متحركة */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-orbit-slow">
                <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple to-blue flex items-center justify-center">
                  <Satellite size={16} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-orbit-reverse">
                <div className="w-6 h-6 rounded-full bg-linear-to-r from-pink to-purple flex items-center justify-center">
                  <Orbit size={12} className="text-white" />
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-orbit">
                <div className="w-5 h-5 rounded-full bg-linear-to-r from-blue to-pink flex items-center justify-center">
                  <Navigation size={10} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* الرقم 404 مع تأثير */}
          <div className="mb-6">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter relative">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink via-purple to-blue animate-gradient-x">
                404
              </span>
              <div className="absolute -inset-3 blur-2xl bg-linear-to-r from-pink/20 via-purple/20 to-blue/20 opacity-50 rounded-full"></div>
            </h1>
            <div className="h-1.5 w-40 mx-auto bg-linear-to-r from-transparent via-pink to-transparent rounded-full mb-4"></div>
          </div>

          {/* الرسالة */}
          <div className="mb-8 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! <span className="text-pink">Lost in Space <Rocket size={30} className="inline-block"/></span> 
            </h2>
            <p className="text-lg md:text-xl text-light/70 max-w-xl mx-auto leading-relaxed mb-6">
              The page you're looking for has been sucked into a 
              <span className="text-purple font-semibold"> black hole</span> or 
              launched into <span className="text-blue font-semibold">deep space</span>.
            </p>
           
          </div>

          {/* الأزرار */}
          <div className="flex justify-center delay-300 " >
            <Link 
              to="/"
              data-aos="zoom-in"
              className="group relative px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple to-blue group-hover:from-purple2 group-hover:to-blue2 transition-all"></div>
              <div className="absolute inset-0 bg-linear-to-r from-pink to-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Home size={18} />
                <span>Return to Earth</span>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;