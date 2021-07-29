import { Container } from "@material-ui/core";
import styles from "./gform.module.css";

export default function GForm(props) {
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
//https://docs.google.com/forms/d/e/1FAIpQLSd9d4BsFoBXhWxsAayFbSetyufcBOHH_ZXNb4-YayjyxuKrbA/viewform?embedded=true
//https://docs.google.com/forms/d/e/1FAIpQLSdA-HYyGAk21mqFCmEfaJd3ipDI8pBCB1vIybynP1f3fQf3jg/viewform?embedded=true
