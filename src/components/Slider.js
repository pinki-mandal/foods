import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
  
    
    pagination={{ clickable: true }}
    autoplay={{ delay: 1000, disableOnInteraction: true}}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide>
      <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Devlivered</h1>
            </div>
      <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-full max-h-[500px] object-cover' src="https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg" alt="/" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-full max-h-[500px] object-cover' src="https://1.bp.blogspot.com/-zllzx1ckaD4/XaizcA-4arI/AAAAAAAAXm4/DSL7QdDrXQgdaKE6WGNKbEZQEDddPE7qgCLcBGAsYHQ/s1600/malabar%2Bchicken%2Bfry%2B5.JPG" alt="/" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-full max-h-[500px] object-cover' src="https://media.istockphoto.com/id/1130550051/photo/stir-fried-noodles-with-veggies.jpg?s=612x612&w=0&k=20&c=7pukpaTViQ76i5-X5XsWXHQcOGXmb0NJxdqrAvRf6So=" alt="/" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

