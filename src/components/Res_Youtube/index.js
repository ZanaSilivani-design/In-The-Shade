import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  YoutubeWrapper,
  Heading,
  YoutubeHeading,
  HeadingFade,
} from "./YoutubeElements";
import youtubeimg from "../../assets/images/youtubeimg.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

function YoutubeSection() {
  const [youtuber, setYoutuber] = useState([]);

  const youtubeCollectionRef = collection(db, "youtube");
  useEffect(() => {
    const getYoutubers = async () => {
      const data = await getDocs(youtubeCollectionRef);
      setYoutuber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getYoutubers();
  }, []);

  return (
    <>
      <YoutubeWrapper id="youtube">
        <YoutubeHeading>Channels To follow</YoutubeHeading>
        <HeadingFade>Youtube</HeadingFade>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={15}
          slidesPerView={"auto"}
        >
          {youtuber.map((youtubers) => {
            return (
              <>
                <SwiperSlide className="card">
                  <img src={youtubeimg} alt="youtube" />
                  <Heading>{youtubers.name}</Heading>
                  <a href={youtubers.link} target="blank">
                    <BsFillArrowRightCircleFill />
                  </a>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </YoutubeWrapper>
    </>
  );
}

export default YoutubeSection;
