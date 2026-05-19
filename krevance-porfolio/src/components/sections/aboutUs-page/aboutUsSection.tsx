import styles from "../../../styles/aboutUsSection.module.css";

export default function AboutUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>About Us</p>
          <h1 className={styles.title}>
            <span className={styles.titleTop}>THE</span>
            <span className={styles.titleBottom}>KRAEV</span>
          </h1>
          <p className={styles.subtitle}>
            Partnership of four driven individuals with
            diverse expertise in design, development,
            operations, and marketing.
          </p>
        </div>
        <div className={styles.right} aria-hidden="true" />
      </div>
    </section>
  );
}
