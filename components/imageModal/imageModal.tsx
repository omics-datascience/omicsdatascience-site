import { Modal } from "@material-ui/core";
import Image from "next/image";
import styles from "./imageModal.module.css";
interface props {
  // eslint-disable-next-line no-undef
  source: StaticImageData;
  trigger: Function;
  open: boolean;
}
export default function ImageModal(props: props) {
  return (
    <Modal
      open={props.open}
      onClose={() => props.trigger()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={`${styles.imageModalStyle} ${styles.size}`}
    >
      <Image
        src={props.source}
        layout="responsive"
        height={15}
        width={25}
        quality={70}
        alt=""
        priority={true}
      />
    </Modal>
  );
}
