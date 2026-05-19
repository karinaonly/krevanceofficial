import styles from "../../../styles/whatmkDiff.module.css";

const FEATURES = [
  {
    id: "01",
    title: "Startup-Friendly Customization",
    text: "We design packages that fit the needs of startups - balancing budget, function, and timeline without compromising quality.",
  },
  {
    id: "02",
    title: "End-To-End Service Model",
    text: "From concept to launch, we manage every stage - giving clients a seamless and worry-free development journey.",
  },
  {
    id: "03",
    title: "Creative-Functional Balance",
    text: "Each design combines visual creativity with strong usability - ensuring experiences that are both engaging and practical.",
  },
  {
    id: "04",
    title: "Transparent Communication",
    text: "Clients receive consistent updates, progress reports, and clear timelines - ensuring trust and accountability at every step.",
  },
  {
    id: "05",
    title: "Client-Centered Approach",
    text: "Every solution is crafted with the client’s vision in mind - balancing functionality with brand personality.",
  },
];

export default function WhatMakesDifferent() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>Why Choose Us</p>
            <h2 className={styles.title}>What Makes Us Different?</h2>
          </div>
          <p className={styles.headerNote}>
            From the smallest interface element to the overall system flow,
            Krevance ensures precision, creativity, and strategy align to
            create lasting value for clients.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article key={feature.id} className={styles.card}>
              <span className={styles.cardNumber}>{feature.id}</span>
              <span className={styles.cardIcon} aria-hidden="true">✦</span>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
