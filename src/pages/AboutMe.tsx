import { Helmet } from "react-helmet-async"
import Header from "../components/Header"

export default function AboutMe() {
  return (
    <section className="custom-width">
      <Helmet>
        <title>Carlos Mateus | About me</title>
      </Helmet>

      <Header />

      <article
        id="contact"
        className="lg:flex flex-wrap justify-between py-12 gap-[10%] "
      >
        <img
          className="w-full lg:w-[45%] max-lg:mb-10"
          src="https://placehold.co/400x400"
          alt="Carlos Mateus"
        />
        <div className="w-full lg:w-[45%]">
          <span>Hi, I&rsquo;m</span>
          <h1 className="font-semibold text-4xl mb-6">Carlos Mateus</h1>
          <p className="text-xl">
            I&rsquo;m a software developer with years of experience creating
            high-quality applications. My passion lies in building intuitive and
            visually engaging user interfaces while ensuring scalable and
            seamless solutions tailored to client needs.
          </p>

          <br />

          <p className="text-xl">
            With expertise in web and mobile development, I leverage modern
            technologies to design user-centric systems that bridge
            functionality and aesthetics. Let&rsquo;s create something amazing
            together.
          </p>
        </div>
      </article>
    </section>
  )
}
