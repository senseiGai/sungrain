import Plx from "react-plx";

import styles from "../Main/styles.module.scss";

import Logo from "@assets/Logo/logo.svg";

function MainScreen(): JSX.Element {
  return (
    <Plx
      parallaxData={[
        {
          start: "self",
          end: 500,
          easing: "easeIn",
          properties: [
            {
              startValue: 1,
              endValue: 1.3,
              property: "scale",
            },
          ],
        },
      ]}
    >
      <section className={styles.main}>
        <main className={styles.main__content}>
          <div className={styles.main__content_logo}>
            <Plx
              parallaxData={[
                {
                  start: "self",
                  end: "30vh",
                  easing: "easeIn",
                  properties: [
                    {
                      startValue: 1,
                      endValue: 0,
                      property: "opacity",
                    },
                  ],
                },
              ]}
            >
              <img src={Logo} alt="logo" />
            </Plx>
          </div>
        </main>
      </section>
    </Plx>
  );
}

export default MainScreen;
