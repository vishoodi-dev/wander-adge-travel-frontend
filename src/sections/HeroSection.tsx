import hero from '../assets/hero.png';

import Button from '../componets/ui/Button';

function HeroSection() {
  return (
    <div className="relative overflow-hidden border border-black/10 bg-slate-100 shadow-sm">
      <img
        src={hero}
        alt="Travelers standing on a mountain viewpoint"
        className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
      />

      <div className="absolute inset-0 bg-white/10" />

      <div className="absolute inset-0 flex items-start justify-start">
        <div className="max-w-2xl px-6 pt-12 sm:px-10 sm:pt-16 lg:px-14 lg:pt-24 text-start">
          <p className="text-base font-medium text-black/75 sm:text-xl">Adventure on the Horizon</p>
          <h1 className="mt-6 max-w-2xl leading-tight lg:leading-[1.12]">
            Explore breathtaking trails and find your peace outdoors
          </h1>
          <Button text="Start Today" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
