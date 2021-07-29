import { Container } from "@material-ui/core";
import styles from "./gform.module.css";

interface props {
  height: number;
  url: string;
}
export default function GForm(props: props) {
  return (
    <Container maxWidth="md" className={styles.frameContainer}>
      <iframe
        src={props.url}
        className={styles.frame}
        height={props.height}
      ></iframe>
    </Container>
  );
}
