import styles from "../../../styles/ourStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Background</p>
          <h2 className={styles.title}>Our Story</h2>
          <p className={styles.subtitle}>Discover the journey that shaped Krevance</p>
        </div>

        <div className={styles.storyCard}>
          <p>
            Krevance was built by a team of designers, developers, and strategists
            united by one vision: to transform ideas into digital success. Each
            founder brings a unique expertise, and together they form a
            collaborative force that turns challenges into opportunities.
          </p>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <span className={styles.cardIcon} aria-hidden="true">✦</span>
            <h3 className={styles.cardTitle}>Mission</h3>
            <p className={styles.cardText}>
              Krevance was built by a team of designers, developers, and strategists
              united by one vision: to transform ideas into digital success. Each
              founder brings a unique expertise, and together they form a
              collaborative force that turns challenges into opportunities.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardIcon} aria-hidden="true">✦</span>
            <h3 className={styles.cardTitle}>Core Values</h3>
            <p className={styles.cardText}>
              Krevance was built by a team of designers, developers, and strategists
              united by one vision: to transform ideas into digital success. Each
              founder brings a unique expertise, and together they form a
              collaborative force that turns challenges into opportunities.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardIcon} aria-hidden="true">✦</span>
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.cardText}>
              Krevance was built by a team of designers, developers, and strategists
              united by one vision: to transform ideas into digital success. Each
              founder brings a unique expertise, and together they form a
              collaborative force that turns challenges into opportunities.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
