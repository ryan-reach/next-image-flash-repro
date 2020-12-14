import Image from "next/image";

const Hero = () => (
  <>
    <div className="container">
      <div>
        <Image
          src="/images/hero.jpg"
          alt=""
          loading="eager"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <p>Nextjs Image component</p>
      <div>
        <div className="img bg" />
      </div>
      <p>background image on div</p>
      <div>
        <img className="img" src="/images/hero.jpg" alt="" />
      </div>
      <p>regular img</p>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .container > div {
        position: relative;
        width: 100vw;
        height: 30vh;
      }

      .img {
        height: 100%;
        width: 100%;
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

export default Hero;
