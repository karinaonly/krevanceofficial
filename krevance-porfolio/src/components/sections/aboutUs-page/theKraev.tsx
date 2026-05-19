import styles from "../../../styles/theKraev.module.css";

const TEAM = [
  { id: "01", name: "Giuliani Calais", role: "Chief Creative Officer" },
  { id: "02", name: "Giuliani Calais", role: "Chief Creative Officer" },
  { id: "03", name: "Giuliani Calais", role: "Chief Creative Officer" },
  { id: "04", name: "Giuliani Calais", role: "Chief Creative Officer" },
];

export default function TheKraev() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The People Behind It</p>
          <h2 className={styles.title}>Meet The Kraev</h2>
          <p className={styles.subtitle}>Get to know the minds behind Krevance</p>
        </div>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <article key={member.id} className={styles.card}>
              <span className={styles.cardNumber}>{member.id}</span>
              <div className={styles.avatar} aria-hidden="true" />
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore.
                </p>

                <div className={styles.actions}>
                  <button type="button" className={styles.cvButton}>
                    CV
                  </button>
                  <button type="button" className={styles.iconButton} aria-label="Instagram">◎</button>
                  <button type="button" className={styles.iconButton} aria-label="LinkedIn">in</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
