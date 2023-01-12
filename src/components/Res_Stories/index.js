import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  StoryWrapper,
  Heading,
  StoryHeading,
  HeadingFade,
} from "./storiesElements";
import { BsYoutube } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

function StoriesSection() {
  const [story, setStory] = useState([]);

  const storyCollectionRef = collection(db, "stories");
  useEffect(() => {
    const getStory = async () => {
      const data = await getDocs(storyCollectionRef);
      setStory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStory();
  }, []);

  return (
    <>
      <StoryWrapper id="stories">
        <StoryHeading>Stories in islam</StoryHeading>
        <HeadingFade>Stories</HeadingFade>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={15}
          slidesPerView={"auto"}
        >
          {story.map((stories) => {
            return (
              <>
                <SwiperSlide className="card">
                  <Heading>{stories.name}</Heading>
                  <a href={stories.link} target="blank">
                    <BsYoutube className="icon" /> Listen
                  </a>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </StoryWrapper>
    </>
  );
}

export default StoriesSection;
