import eatingIcon from "/src/assets/images/icon-eating.svg";
import exerciseIcon from "/src/assets/images/icon-exercise.svg";
import sleepIcon from "/src/assets/images/icon-sleep.svg";
import Tip from './Tip/Tip'
import styles from './Tips.module.scss'

const Tips = () => {
    return (
      <section className={styles.tips}>
        <Tip
          title="Healthy eating"
          content="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
          img={eatingIcon}
          className={styles.tip}
        />

        <Tip
          title="Regular exercise"
          content="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
          img={exerciseIcon}
          className={styles.tip}
        />

        <Tip
          title="Adequate sleep"
          content="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
          img={sleepIcon}
          className={styles.tip}
        />
      </section>
    );
}

export default Tips;