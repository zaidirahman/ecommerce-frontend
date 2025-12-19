import { Check } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

interface SuccessProps {
    onReset: () => void;
}

export default function Success({ onReset }: SuccessProps) {
  useEffect(() => {
    // Fire confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center animate-fade-in">
        <div className="bg-blue-50 text-blue-600 rounded-full p-6 mb-8 animate-scale-in">
            <Check className="w-16 h-16" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-center tracking-tight text-blue-950">
            Thank You!
        </h1>
        <p className="text-xl text-gray-500 max-w-md text-center mb-12">
            <a href="https://wa.me/923250055057" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                Call on WhatsApp for order (click here)
            </a>
        </p>

        <button 
            onClick={onReset}
            className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium shadow-xl hover:scale-105 hover:bg-blue-700 transition-all duration-300 shadow-blue-200"
        >
            Continue Shopping
        </button>
    </div>
  );
}
