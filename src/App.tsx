import { ArrowRight, ShieldCheck, Lock, Truck, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const REDIRECT_URL = "https://realmemopezil.com/mmp-aff-buy-dtc/?aff_id=71167&subid=spgeusfbads";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 10000; // 10 seconds
    const intervalTime = 50; // update every 50ms
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          window.location.href = REDIRECT_URL;
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    // Fallback to ensure redirect happens
    const timeout = setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, duration + 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handleRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-[#F6F4EB] flex flex-col items-center justify-center p-4 lg:p-8 font-sans">
      
      {/* Main Card */}
      <div className="w-full max-w-[880px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-[6px] border-[#F48220] relative p-1 pb-8">
        
        {/* Banner Section */}
        <div className="m-3 md:m-4 rounded-2xl overflow-hidden relative flex justify-center">
          <img 
            src="newverison.png" 
            alt="Product Comparison" 
            className="block w-full max-w-[500px] h-auto object-contain"
          />
        </div>

        {/* Redirecting Status */}
        <div className="pt-8 px-6 text-center max-w-2xl mx-auto">
          <p className="text-[#848484] text-[14px] sm:text-[15px] mb-8 font-medium">
            We're securely redirecting you to the new official checkout page.
          </p>
          
          {/* Progress Bar Container */}
          <div className="w-full max-w-[520px] mx-auto mb-10">
            <div className="flex justify-between items-end mb-3 px-1">
              <div className="flex items-center space-x-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48220] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F48220]"></span>
                </span>
                <span className="text-[13px] text-[#737373] font-medium tracking-wide">Redirecting to secure checkout</span>
              </div>
              <span className="text-[13px] font-bold text-[#737373]">{Math.max(0, Math.min(100, Math.round(progress)))}%</span>
            </div>
            <div className="h-2.5 w-full bg-[#EFEFEF] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#F48220] rounded-full shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)] transition-all ease-linear" 
                style={{ width: `${progress}%`, transitionDuration: '50ms' }}
              ></div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mb-10">
            <button 
              onClick={handleRedirect}
              className="bg-[#F48220] hover:bg-[#DE7113] active:scale-95 transition-all duration-200 text-white font-bold text-[17px] py-[18px] px-10 rounded-full flex items-center shadow-[0_8px_20px_rgba(244,130,32,0.25)] hover:shadow-[0_10px_25px_rgba(244,130,32,0.35)] hover:-translate-y-0.5 ease-out tracking-wide">
              Continue to secure checkout
              <ArrowRight className="ml-2.5 h-[1.15rem] w-[1.15rem] stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="px-8 md:px-12">
          <hr className="border-[#F0F0F0] border-t" />
        </div>

        {/* Trust Badges / Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 pt-8 px-6 md:px-12">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="h-6 w-6 text-[#F48220] mb-2.5 stroke-[1.5]" />
            <span className="text-[13px] text-[#8C8C8C] font-medium leading-tight">60-Day Guarantee</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lock className="h-6 w-6 text-[#F48220] mb-2.5 stroke-[1.5]" />
            <span className="text-[13px] text-[#8C8C8C] font-medium leading-tight">256-bit Secure Checkout</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="h-6 w-6 text-[#F48220] mb-2.5 stroke-[1.5]" />
            <span className="text-[13px] text-[#8C8C8C] font-medium leading-tight">Free US Shipping</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-6 w-6 text-[#F48220] mb-2.5 stroke-[1.5]" />
            <span className="text-[13px] text-[#8C8C8C] font-medium leading-tight">Made in FDA-Reg. Facility</span>
          </div>
        </div>
      </div>

      {/* Footer text outside card */}
      <div className="mt-8 text-center px-4">
        <p className="text-[12px] text-[#9A9A9A] font-medium tracking-wide">
          Your tracking and order details are preserved during the transition.
        </p>
      </div>

    </div>
  );
}
