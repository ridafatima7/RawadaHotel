import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import user1 from '../../assets/images/user1.png';
import user2 from '../../assets/images/user2.png';
import user3 from '../../assets/images/user3.png';
import bottomMotif from '../../assets/images/reviewUp.png';
import upperMotif from '../../assets/images/reviewBottom.png';

const Reviews = () => {
  const reviews = [
    { id: 1, img: user1, rating: 5, comment: "This was the best experience I've ever had! Highly recommended.", name: 'John Doe' },
    { id: 2, img: user2, rating: 4, comment: "Amazing service and great atmosphere. Would come again!", name: 'Jane Smith' },
    { id: 3, img: user3, rating: 5, comment: "Exceptional quality and very friendly staff. Loved it!", name: 'Alex Brown' },
    { id: 4, img: user1, rating: 5, comment: "Exceptional quality and very friendly staff. Loved it!", name: 'Alex Brown' },
    { id: 5, img: user2, rating: 5, comment: "Exceptional quality and very friendly staff. Loved it!", name: 'Alex Brown' },
  ];

  return (
    <section className='overflow-hidden'>
    <div className='relative '>
        <img
          src={bottomMotif}
          alt="BottomMotif"
          className="absolute top-[-290px]  right-0 z-0 overflow-hidden"
          style={{ position: "absolute", height:"550px"}}
        />       
          <img
            src={upperMotif}
            alt="UpperMotif"
            className="absolute bottom-[-1050px] left-0 z-0 overflow-hidden"
            style={{ position: "absolute", right: "0", marginRight: "-1rem",width:"330px" }}
          />
      </div>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <h2 className="text-lg text-center subheading">TESTIMONIAL</h2>
        <h3 className="text-2xl mt-2 pt-2 pb-8 text-center heading">
          What Clients Say About Us
        </h3>

        {/* <img
        src={bottomMotif}
        alt="Bottom Motif"
        className="absolute top-[-180px] right-0 z-0"
      />

      <img
        src={upperMotif}
        alt="Upper Motif"
        className="absolute bottom-[-80px] left-0 z-0 overflow-hidden"
      /> */}

        <div className="relative z-10">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="review-slide">
                <div className="py-6 bg-white rounded-lg text-center transform transition duration-300 hover:scale-105">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="review-image mx-auto mb-4 w-full h-60 object-cover transition-all duration-300 ease-in-out"
                  />
                  <div className="flex justify-center mb-4 text-yellow-500">
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-lg textSmall leading-relaxed">
                    "{review.comment}"
                  </p>
                  <h4 className="font-light text-xl  text-gray-800">{review.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
