/* eslint-disable no-undef */
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Container } from "@material-ui/core";
import { useState } from "react";
import ImageModal from "../imageModal/imageModal";

import img1 from "/public/img1.png";
import img2 from "/public/img2.png";
import img3 from "/public/img3.png";
import img4 from "/public/img4.png";
const images = [img1, img2, img3, img4];

export default function CarouselComponent() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  function Item(props: any) {
    return (
      <Image
        id={props.keydown}
        src={props.item}
        layout="responsive"
        height={15}
        width={25}
        alt=""
        onClick={() => setOpen(!open)}
      ></Image>
    );
  }

  return (
    <Container>
      <Carousel navButtonsAlwaysInvisible={false}>
        {images.map((item: StaticImageData, i: number) => (
          <div key={i}>
            <Item key={i} item={item} />
            <ImageModal
              key={i}
              source={item}
              trigger={handleClose}
              open={open}
            />
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
