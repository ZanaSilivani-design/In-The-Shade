import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  KahootWrapper,
  Heading,
  KahootHeading,
  HeadingFade,
  QuestionsNumber,
} from "./KahootElements";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

function KahootSection() {
  const [kahoot, setKahoot] = useState([]);

  const kahootCollectionRef = collection(db, "kahoots");
  useEffect(() => {
    const getKahoot = async () => {
      const data = await getDocs(kahootCollectionRef);
      setKahoot(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getKahoot();
  }, []);

  return (
    <>
      <KahootWrapper id="kahoot">
        <KahootHeading>Islamic Kahoots!</KahootHeading>
        <HeadingFade>Kahoots!</HeadingFade>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={15}
          slidesPerView={"auto"}
        >
          {kahoot.map((kahoots) => {
            return (
              <>
                <SwiperSlide className="card">
                  <QuestionsNumber>{kahoots.questions} Qn</QuestionsNumber>
                  <Heading>{kahoots.name}</Heading>
                  <a href={kahoots.link} target="blank">
                    <BsFillPlayCircleFill />
                  </a>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </KahootWrapper>
    </>
  );
}

export default KahootSection;
