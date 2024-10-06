export default function ContactForm() {
  return (
    <article className="w-full mt-14 lg:w-[35vw] lg:mt-0 flex flex-col gap-6">
      <div className="flex flex-col">
        <label>Name</label>
        <input className="border border-black p-2 mt-2" placeholder="John Doe" />
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input className="border border-black p-2 mt-2" type="email" placeholder="johndoe@example.com" />
      </div>
      <div className="flex flex-col">
        <label>Subject</label>
        <input className="border border-black p-2 mt-2" placeholder="Message title" />
      </div>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea className="border border-black p-2 mt-2 h-28 resize-none" placeholder="Your message" />
      </div>
      <button className="bg-black hover:bg-[#373737] active:bg-black text-white p-2">Send</button>
    </article>
  )
}