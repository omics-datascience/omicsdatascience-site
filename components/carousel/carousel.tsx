import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Container } from "@material-ui/core";
import { useState } from "react";
import ImageModal from "../imageModal/imageModal";

export default function CarouselComponent(props: any) {
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
      <Carousel navButtonsAlwaysInvisible={false} autoPlay={false}>
        {props.items.map((item: string, i: number) => (
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
