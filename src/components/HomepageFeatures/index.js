import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Features from "../../../contentrain/Features/Features.json";
import useBaseUrl from "@docusaurus/useBaseUrl";
const FeatureList = Features.map((feature) => ({
  title: feature.title,
  Svg: feature.svg.split("static/")[1],
  description: <>{feature.description}</>,
}));
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={useBaseUrl(Svg)} alt={title + "svg image"}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

