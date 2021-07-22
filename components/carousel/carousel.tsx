import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
export default function CarouselComponent(props: any) {
  return (
    <Carousel>
      {props.items.map((item: string, i: number) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Image
      id={props.keydown}
      src={props.item}
      layout="responsive"
      height={700}
      width={700}
      alt=""
    ></Image>
  );
}
