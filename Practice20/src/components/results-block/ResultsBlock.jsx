import image from "/src/assets/images/image-man-eating.webp";
import styles from "./ResultsBlock.module.scss";
import line from "/src/assets/images/pattern-curved-line-left.svg";
import { useState, useEffect } from "react";

const ResultBlock = () => {

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
      <section className={styles.resultSection}>
        {isDesktop && (
          <img id={styles.decoration} src={line} alt="Decoration" />
        )}
        <div
          id={styles.imageDiv}
          className={styles.imgContainer}
          aria-labelledby={styles.resultTitle}
        >
          <img src={image} alt="Image" />
        </div>
        <div className={styles.info}>
          <h2
            id={styles.resultTitle}
            className={
              isDesktop ? `inter-preset-2-semiBold ` : `inter-preset-3-semiBold`
            }
          >
            What your BMI result means
          </h2>
          <p className={`inter-preset-6-regular ${styles.resultInfo}`}>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </section>
    );
}

export default ResultBlock;