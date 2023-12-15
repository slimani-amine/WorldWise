// Uses the same styles as Product
import PageNav from "../component/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav/>
      <section>
        <div>
          <h2>
            Simple pricing
            <br />
            Just $9/month.
          </h2>
          <p>
          Explore without complexity or hidden fees. Join today and dive into a world of possibilities at an affordable rate.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
