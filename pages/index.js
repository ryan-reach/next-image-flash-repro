import Link from "next/link";

const Home = () => (
  <>
    <div className="container">
      <Link href="/thumbnails">Thumbnails Example</Link>
      <Link href="/hero">Hero Example</Link>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </>
);

export default Home;
