import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

interface IFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false) // Track form submission status
  const [isSuccess, setIsSuccess] = useState(false) // Track success state for animation

  const schema = z.object({
    name: z
      .string({ required_error: "Name is required." })
      .min(2, { message: "Name must be at least 2 characters long." })
      .max(50, { message: "Name must be at most 50 characters long." }),

    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Invalid email format, please enter a valid email." }),

    subject: z
      .string({ required_error: "Subject is required." })
      .min(5, { message: "Subject must be at least 5 characters long." })
      .max(100, { message: "Subject must be at most 100 characters long." }),

    message: z
      .string({ required_error: "Message is required." })
      .min(10, { message: "Message must be at least 10 characters long." })
      .max(500, { message: "Message must be at most 500 characters long." }),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: IFormData) {
    setIsSubmitting(true) // Start loading animation

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/carlosmatateumateus@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      const result = await response.json()
      console.log(result)

      // Show success state and reset the form
      setIsSuccess(true)
      reset()

      // Revert button to normal after 3 seconds
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting the form:", error)
      setIsSubmitting(false) // Revert button in case of error
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-14 lg:w-[35vw] lg:mt-0 flex flex-col gap-6"
    >
      <div className="flex flex-col">
        <label>Name</label>
        <input
          className="border border-black p-2 mt-2"
          placeholder="John Doe"
          {...register("name")}
        />
        <p className="text-red-500 font-medium mt-1">{errors.name?.message}</p>
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="border border-black p-2 mt-2"
          type="email"
          placeholder="johndoe@example.com"
          {...register("email")}
        />
        <p className="text-red-500 font-medium mt-1">{errors.email?.message}</p>
      </div>
      <div className="flex flex-col">
        <label>Subject</label>
        <input
          className="border border-black p-2 mt-2"
          placeholder="Message title"
          {...register("subject")}
        />
        <p className="text-red-500 font-medium mt-1">
          {errors.subject?.message}
        </p>
      </div>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea
          className="border border-black p-2 mt-2 h-28 resize-none"
          placeholder="Your message"
          {...register("message")}
        />
        <p className="text-red-500 font-medium mt-1">
          {errors.message?.message}
        </p>
      </div>

      <button
        className={`bg-black text-white p-2 transition-all duration-300 ease-in-out ${
          isSubmitting
            ? "cursor-not-allowed bg-gray-500 animate-pulse"
            : "hover:bg-[#373737] active:bg-black"
        } ${isSuccess ? "bg-green-500" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send"}
      </button>
    </form>
  )
}
