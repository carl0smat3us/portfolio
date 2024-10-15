import Header from "../components/Header";

export default function Experiences() {
  return (
    <section className="custom-width">
      <Header />
      <div className="mt-[7%]">
        <h1 className="font-semibold text-4xl mt-6">Work experiences</h1>
        <p className="text-gray-500">Peruse my employment background.</p>
      </div>
      <article className="mt-5">
        <h2 className="text-xl font-medium">Software developer Freelancer</h2>
        <span className="text-gray-400 text-sm">2021 - Present</span>
        <ul className="list-disc list-inside mt-3 leading-10">
          <li>Backend construction: Node.js and Python (Django) for high performance and scalability.</li>
          <li>UI prototyping: Adobe XD, Figma for intuitive designs.</li>
          <li> Website creation: ReactJS, NextJS.</li>
          <li>Mobile app development: React Native for iOS and Android. Collaboration with design and product teams for high-quality, user-centric products.</li>
        </ul>
      </article>
      <article className="mt-5">
        <h2 className="text-xl font-medium">Software developer at ADJ Pro</h2>
        <span className="text-gray-400 text-sm">08/2023 - 03/2024</span>
        <ul className="list-disc list-inside mt-3 leading-10">
          <li>Development of APIs and services in the Rest architecture model and features for mobile applications made with React Native.</li>
          <li>Creation of platforms and websites using ReactJS, NextJS, Typescript, among others.</li>
          <li>Responsible for the development of a complete e-commerce, covering functionalities such as placing and managing orders, creating advertising campaigns and automated invoicing.</li>
        </ul>
      </article>
    </section>
  )
}