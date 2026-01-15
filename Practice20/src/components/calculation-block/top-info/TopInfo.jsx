import logo from "/src/assets/images/logo.svg"
import styles from "./TopInfo.module.scss";
import { useState,useEffect } from "react";

const TopInfo = () => {

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
      <section className={styles.topInfo} aria-labelledby={styles.title}>
        <img src={logo} alt="Logo" />
        <h1
          className={
            isDesktop ? `inter-preset-1-semiBold` : `inter-preset-2-semiBold`
          }
          id={styles.title}
        >
          Body Mass Index Calculator
        </h1>
        <p className={`inter-preset-6-regular ${styles.info}`}>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </section>
    );
}

export default TopInfo;