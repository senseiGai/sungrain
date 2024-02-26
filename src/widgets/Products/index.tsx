import React from "react";

import { Heading } from "@shared/ui/Heading";

import styles from "../Products/styles.module.scss";

function products() {
  return (
    <section className={styles.products}>
      <div className={styles.products__content} id="contacts">
        <section className={styles.products__flower}>
          <section className={styles.products__flower_text}>
            <Heading
              headingType="secondary"
              text="Русское поле"
              margin="mt-52"
            />

            <table>
              <tbody>
                <tr>
                  <th className={styles.products__flower_text_type}>Сорт</th>
                  <td>Зерно</td>
                </tr>
                <tr>
                  <th className={styles.products__flower_text_color}>Цвет</th>
                  <td>Желтый</td>
                </tr>
                <tr>
                  <th className={styles.products__flower_text_number}>
                    Число падения
                  </th>
                  <td>250</td>
                </tr>
                <tr>
                  <th className={styles.products__flower_text_whiteness}>
                    Белизна
                  </th>
                  <td>12%</td>
                </tr>
                <tr>
                  <th className={styles.products__flower_text_moisture}>
                    Массовая доля влаги
                  </th>
                  <td>12%</td>
                </tr>
                <tr>
                  <th className={styles.products__flower_text_gluten}>
                    Клейковина (сырая)
                  </th>
                  <td>27%</td>
                </tr>
                <tr>
                  <th className={styles.products__flower_text_IDK}>ИДК</th>
                  <td>90</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </section>
  );
}

export default products;
