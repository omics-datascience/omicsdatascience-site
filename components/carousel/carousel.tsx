import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Container } from "@material-ui/core";

export default function CarouselComponent(props: any) {
  return (
    <Container>
      <Carousel>
        {props.items.map((item: string, i: number) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
}

function Item(props: any) {
  return (
    <Image
      id={props.keydown}
      src={props.item}
      layout="responsive"
      height={50}
      width={81}
      alt=""
    ></Image>
  );
}
