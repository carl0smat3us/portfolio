import { DribbbleLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import Header from "../components/Header"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <section className="custom-width">
      <Header />
      <article
        id="contact"
        className="lg:flex flex-wrap justify-between py-12 mt-16"
      >
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-semibold text-3xl lg:w-[520px]">
            Let's build an incredible project together.
          </h2>
          <p className="text-lg lg:w-[300px]">
            Fill in all the fields so i can contact you as quickly as possible.
          </p>
          <p className="text-lg lg:w-[300px]">
            Or simply send me a message at{" "}
            <a href="mailto:hi@carlosmateus.com">
              <u>hi@carlosmateus.com</u>
            </a>
            .
          </p>
          <div>
            <h2 className="font-semibold text-xl w-[400px]">Social networks</h2>
            <div className="flex gap-2 mt-2">
              <LinkedinLogo size={25} />
              <a href="https://github.com/kamajus3">
                <GithubLogo size={25} />
              </a>
              <a href="https://dribbble.com/carlosmateus">
                <DribbbleLogo size={25} />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </article>
    </section>
  )
}
