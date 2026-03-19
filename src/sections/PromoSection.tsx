import Button from '../componets/ui/Button';
function PromoSection() {
  return (
    <section
      id="tours"
      className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8"
    >
      <div className="order-2 lg:order-1">
        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1200&q=80"
            alt="Traveler looking at scenic landscape"
            className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[460px]"
          />
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="text-start">
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Why hiking is uniquely beneficial for your body and your brain
          </h2>
          <p className="mt-5 text-base leading-7 text-black/70 sm:text-lg">
            Hiking isn’t just exercise — it’s a full reset for your body and brain. It strengthens
            your muscles, improves heart health, and boosts endurance while surrounding you with
            fresh air and natural beauty. At the same time, it reduces stress, clears your mind, and
            enhances focus and creativity. Every trail you take helps you feel stronger, calmer, and
            more connected — inside and out.
          </p>
        </div>
        <Button text="VIEW MORE" />
      </div>
    </section>
  );
}

export default PromoSection;
