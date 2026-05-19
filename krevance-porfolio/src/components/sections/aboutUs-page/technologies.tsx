import styles from "../../../styles/technologies.module.css";

const LOGOS = [
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
  "logoipsum",
];

export default function Technologies() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Stack</p>
          <h2 className={styles.title}>Tools & Technologies</h2>
          <p className={styles.subtitle}>
            Every project is developed using trusted design, coding, and management tools
            to ensure quality and efficiency.
          </p>
        </div>

        <div className={styles.logos}>
          {LOGOS.map((logo, index) => (
            <div key={`${logo}-${index}`} className={styles.logoItem}>
              <span className={styles.logoIcon} aria-hidden="true" />
              <span className={styles.logoText}>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
