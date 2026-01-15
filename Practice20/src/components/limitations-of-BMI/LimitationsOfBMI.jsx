import LimitationTip from "./LimitationTip";
import genderImage from "/src/assets/images/icon-gender.svg";
import ageImage from "/src/assets/images/icon-age.svg";
import muscleImage from "/src/assets/images/icon-muscle.svg";
import pergancyImage from "/src/assets/images/icon-pregnancy.svg";
import raceImage from "/src/assets/images/icon-race.svg";
import styles from "./LimitatinsOfBMI.module.scss";
import { useState, useEffect } from "react";

const LimitationsOfBMI = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const checkSize = () => {
        setIsDesktop(window.innerWidth > 900);
      };
      checkSize();

      window.addEventListener(`resize`, checkSize);

      return () => window.removeEventListener(`resize`, checkSize);
    }, []);

    return (
      <section className={styles.limitations}>
        <div className={styles.titleContainer}>
          <h2
            className={
              isDesktop ? `inter-preset-2-semiBold` : `inter-preset-3-semiBold`
            }
          >
            Limitations of BMI
          </h2>
          <p className="inter-preset-6-regular">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className={styles.tipsContainer}>
          <LimitationTip
            id={styles.gender}
            className={styles.limitationTip}
            img={genderImage}
            title="Gender"
            content="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          />
          <LimitationTip
            id={styles.age}
            className={styles.limitationTip}
            img={ageImage}
            title="Age"
            content="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          />
          <LimitationTip
            id={styles.muscle}
            className={styles.limitationTip}
            img={muscleImage}
            title="Muscle"
            content="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          />
          <LimitationTip
            id={styles.pregnancy}
            className={styles.limitationTip}
            img={pergancyImage}
            title="Pregnancy"
            content="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          />
          <LimitationTip
            id={styles.race}
            className={styles.limitationTip}
            img={raceImage}
            title="Race"
            content="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          />
        </div>
      </section>
    );
}

export default LimitationsOfBMI;