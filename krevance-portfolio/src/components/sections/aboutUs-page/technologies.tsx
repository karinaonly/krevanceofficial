"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypeorm,
} from "react-icons/si";
import styles from "../../../styles/technologies.module.css";

const LOGOS = [
  { name: "Reactjs", Icon: SiReact },
  { name: "Nextjs", Icon: SiNextdotjs },
  { name: "Nestjs", Icon: SiNestjs },
  { name: "MySQL", Icon: SiMysql },
  { name: "Figma", Icon: SiFigma },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Nodejs", Icon: SiNodedotjs },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Typeorm", Icon: SiTypeorm },
  { name: "PHP", Icon: SiPhp },
];

export default function Technologies() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRefAlt = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const tweenAltRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeAlt = marqueeRefAlt.current;
    if (!marquee || !marqueeAlt) return;

    const scrollWidth = marquee.scrollWidth / 2;
    const scrollWidthAlt = marqueeAlt.scrollWidth / 2;

    tweenRef.current = gsap.to(marquee, {
      x: -scrollWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    tweenAltRef.current = gsap.fromTo(
      marqueeAlt,
      { x: -scrollWidthAlt },
      {
        x: 0,
        duration: 32,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      if (tweenAltRef.current) {
        tweenAltRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.pause();
    }
    if (tweenAltRef.current) {
      tweenAltRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.play();
    }
    if (tweenAltRef.current) {
      tweenAltRef.current.play();
    }
  };

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

        <div className={styles.marqueeStack}>
          <div
            className={styles.marqueeMask}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.marqueeTrack} ref={marqueeRef}>
              <div className={styles.logoRow}>
                {LOGOS.map(({ name, Icon }, index) => (
                  <div key={`tech-${name}-${index}`} className={styles.logoItem}>
                    <Icon className={styles.logoIcon} aria-hidden="true" />
                    <span className={styles.logoText}>{name}</span>
                  </div>
                ))}
              </div>
              <div className={styles.logoRow} aria-hidden="true">
                {LOGOS.map(({ name, Icon }, index) => (
                  <div key={`tech-dup-${name}-${index}`} className={styles.logoItem}>
                    <Icon className={styles.logoIcon} aria-hidden="true" />
                    <span className={styles.logoText}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={styles.marqueeMask}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.marqueeTrack} ref={marqueeRefAlt}>
              <div className={styles.logoRow}>
                {LOGOS.map(({ name, Icon }, index) => (
                  <div key={`tech-alt-${name}-${index}`} className={styles.logoItem}>
                    <Icon className={styles.logoIcon} aria-hidden="true" />
                    <span className={styles.logoText}>{name}</span>
                  </div>
                ))}
              </div>
              <div className={styles.logoRow} aria-hidden="true">
                {LOGOS.map(({ name, Icon }, index) => (
                  <div key={`tech-alt-dup-${name}-${index}`} className={styles.logoItem}>
                    <Icon className={styles.logoIcon} aria-hidden="true" />
                    <span className={styles.logoText}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
