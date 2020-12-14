import Image from "next/image";

const Thumbnails = () => (
  <>
    <div className="container">
      <div>
        <Image
          src="/images/hero.jpg"
          alt=""
          width={200}
          height={200}
          loading="eager"
          // objectFit="cover"
          // objectPosition="center"
        />
        <p>Nextjs Image component</p>
      </div>
      <div>
        <div className="img bg" />
        <p>background image on div</p>
      </div>
      <div>
        <img className="img" src="/images/hero.jpg" alt="" />
        <p>regular img</p>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-around;
      }

      .img {
        height: 200px;
        width: 200px;
        object-fit: cover;
        object-position: center;
      }

      .bg {
        background-image: url(/images/hero.jpg);
        background-size: cover;
        background-position: center;
      }
    `}</style>
  </>
);

export default Thumbnails;
