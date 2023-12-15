import PageNav from "../component/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Your passport to global exploration. Navigate effortlessly through
            cities and countries, uncovering the world's beauty at your
            fingertips. From vibrant urban landscapes to serene natural wonders,
            WorldWise invites you to discover the extraordinary with each click.
            Join us on a journey that transcends boundaries and sparks the
            spirit of adventure.
          </p>
        </div>
      </section>
    </main>
  );
}
