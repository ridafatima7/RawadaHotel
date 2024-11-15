import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import attraction1 from "../../assets/images/attraction1.png";
import attraction2 from "../../assets/images/attraction2.png";
import attraction3 from "../../assets/images/attraction3.png";

const Attractions = () => {
  const swiperRef = useRef(null);

  const attractions = [
    {
      id: 1,
      image: attraction1,
      name: "Jabal Al-Nour",
      date: "25th December 2020",
    },
    {
      id: 2,
      image: attraction2,
      name: "Makkah Grand Mosque",
      date: "1st January 2021",
    },
    {
      id: 3,
      image: attraction3,
      name: "Kingdom Tower",
      date: "15th February 2021",
    },
    {
      id: 4,
      image: attraction3,
      name: "Kingdom Tower",
      date: "15th February 2021",
    },
  ];

  const updateButtonState = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const prevButton = document.querySelector(".custom-prev");
    const nextButton = document.querySelector(".custom-next");

    if (swiper.isBeginning) {
      prevButton.classList.add("disabled");
    } else {
      prevButton.classList.remove("disabled");
    }

    if (swiper.isEnd) {
      nextButton.classList.add("disabled");
    } else {
      nextButton.classList.remove("disabled");
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.on("slideChange", updateButtonState);
      updateButtonState(); // Initial state
    }

    return () => {
      if (swiper) swiper.off("slideChange", updateButtonState);
    };
  }, []);

  return (
    <section className="py-12">
      <div className="ml-11">
        <h2 className="text-lg text-left subheading">Nearest Attraction</h2>
        <h3 className="text-xl mt-2 pt-2 pb-12 text-left heading">
          Discover Attractions Close to You
        </h3>

        <div className="relative">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              468: { slidesPerView: 2 },
              768: { slidesPerView: 2.3 },
            }}
            ref={swiperRef}
          >
            {attractions.map((attraction) => (
              <SwiperSlide key={attraction.id}>
                <div className="container-pink shadow-lg overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {attraction.name}
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Handover Date - {attraction.date}
                    </p>
                    <button className="mt-4 px-4 py-2 bg-black text-white font-semibold hover:bg-opacity-80 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-navigation">
            <button
              className="custom-prev"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="custom-next"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
