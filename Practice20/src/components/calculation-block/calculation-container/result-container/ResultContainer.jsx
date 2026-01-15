import { resume } from "react-dom/server";
import styles from "./ResultContainer.module.scss";
import { useState,useEffect } from "react";

const ResultContainer = (props) => {

  const { result, minWieght, maxWieght } = props;

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
      <section className={styles.resultContainer}>
        <div className="res-container">
          {result && (
            <h2 className="inter-preset-6-semiBold" id={styles.title}>
              Your BMI is...
            </h2>
          )}
          {result && (
            <h1 className={`${ isDesktop ? `inter-preset-1-semiBold` : `inter-preset-2-semiBold` }`}>
              {isNaN(result) ? `` : result}
            </h1>
          )}
          {!result && <h2 className="inter-preset-4-semiBold">Welcome!</h2>}
        </div>

        {result ? (
          <p className={`inter-preset-6-regular`}>
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <b>{minWieght}</b> - <b>{maxWieght}</b>.
          </p>
        ) : (
          <span className="inter-preset-7-regular">
            Enter your height and weight and you’ll see your BMI result here
          </span>
        )}
      </section>
    );
}

export default ResultContainer;
