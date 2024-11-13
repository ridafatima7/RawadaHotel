import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import user1 from '../../assets/images/user1.png';
import user2 from '../../assets/images/user2.png';
import user3 from '../../assets/images/user3.png';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    { id: 1, img: user1, rating: 5, comment: "This was the best experience I've ever had! Highly recommended.", name: 'John Doe' },
    { id: 2, img: user2, rating: 4, comment: "Amazing service and great atmosphere. Would come again!", name: 'Jane Smith' },
    { id: 3, img: user3, rating: 5, comment: "Exceptional quality and very friendly staff. Loved it!", name: 'Alex Brown' },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-lg text-center subheading">TESTIMONIAL</h2>
      <h3 className="text-2xl mt-2 pt-2 pb-8 text-center heading">What Clients Say About Us</h3>
      
      <div className="relative">
        <Swiper
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="py-6 bg-white rounded-lg text-center transform transition duration-300 hover:scale-105">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="mx-auto mb-4 w-full h-60 object-cover"
                />
                <div className="flex justify-center mb-4 text-yellow-500">
                  {Array(review.rating).fill().map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  "{review.comment}"
                </p>
                <h4 className="font-light text-xl text-gray-800">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination"></div>
        </Swiper>
        {/* Custom Pagination Dots */}
      </div>
    </section>
  );
};

export default Reviews;
