import { PureComponent } from "react";
import styles from './Button.module.scss';


class Button extends PureComponent {
  render() {
    const { onClick, text, backgroundColor} = this.props
    return <button onClick={onClick} className={styles.Button} style={{backgroundColor}}>{text}</button>
  } 
}

export default Button;