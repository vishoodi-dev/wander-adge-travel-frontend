import { features } from '../data/content';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Featuresection = () => {
  return (
    <>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-6 text-start">
              {features.map((feature, index) => (
                <article
                  key={`${feature.title}-${index}`}
                  className="flex w-[520px] shrink-0 overflow-hidden rounded-sm border border-black/10 bg-white shadow-sm h-[200px]"
                >
                  <div className="w-[180px] shrink-0 sm:w-[190px]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full min-h-[170px] w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="text-[18px] font-semibold leading-8 text-black/80">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-[16px] leading-8 text-black/65">{feature.text}</p>
                    </div>

                    <button className="mt-4 inline-flex items-center justify-end gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#4e8550]">
                      <span>View More</span>
                      <IoIosArrowDroprightCircle size={30} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="order-1 lg:order-2 text-start mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Ella Rock: A beautiful walk through the hill country
          </h2>
          <p className="mt-5 text-base leading-7 text-black/70 sm:text-lg">
            Ella’s other beautiful and easily accessible hike is the climb up Ella Rock. This route
            takes you along the train tracks above town, through tea plantations, and up to several
            gorgeous viewpoints overlooking Ella and the surrounding mountains. To reach the hiking
            trail, you’ll first need to get to the train tracks. The easiest way to do that is to
            walk to Ella station, although you may also be able to reach the tracks via various
            shortcuts elsewhere in town. Walk south along the railroad line toward Kithalella
            station. (Note that this is spelled Kitha Ella on Google Maps.) The trail starts from
            the train tracks less than a kilometer past the station. It will be on your left.
          </p>
        </div>
      </div>
    </>
  );
};

export default Featuresection;
