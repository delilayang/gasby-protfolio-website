import React from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>email:</label>
      <input type="text" placeholder="email" name="email" ref={register} />
      <label>password:</label>
      <input
        type="text"
        placeholder="password"
        name="passwordRequired"
        ref={register({
          required: "PASSWORD REQUIRED",
          minLength: { value: 8, message: "TOO SHORT" },
        })}
      />
      {errors.passwordRequired && (
        <span>{errors.passwordRequired.message}</span>
      )}
      <input type="submit" value="Submit" />
    </form>
  )
}
