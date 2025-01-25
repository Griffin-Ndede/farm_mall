import { Sprout } from 'lucide-react';

function Hero() {
  return (
    <div className="hidden lg:block lg:w-1/2 relative">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
        alt="Agricultural field"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/50 flex items-center justify-center p-12">
        <div className="text-white max-w-xl">
          <Sprout className="h-12 w-12 mb-8" />
          <h2 className="text-4xl font-bold mb-4">Growing Together</h2>
          <p className="text-lg text-green-50">
            Join our community of farmers, agronomists, and agricultural experts to cultivate a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
