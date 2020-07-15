import React from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = formData => console.log(formData)
  console.log(watch("example"))

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form"
    >
      <label>Name:</label>
      <input
        type="text"
        placeholder="name"
        name="nameRequired"
        ref={register({
          required: "Name required!",
          minLength: { value: 3, message: "Name is invalid!" },
        })}
      />
      {errors.nameRequired && (
        <span className="error-message">{errors.nameRequired.message} </span>
      )}

      <label>Age:</label>
      <input type="number" placeholder="age" name="age" />

      <label>Email:</label>
      <input type="text" placeholder="email" name="email" ref={register} />

      <label>Password:</label>
      <input
        type="text"
        placeholder="password"
        name="passwordRequired"
        ref={register({
          required: "Password required!",
          minLength: { value: 8, message: "Too short!" },
        })}
      />
      {errors.passwordRequired && (
        <span className="error-message">{errors.passwordRequired.message}</span>
      )}

      <span>
        <input type="checkbox" name="remember" />
        <label> Remember me</label>
      </span>

      <input type="submit" value="Submit" className="btn-submit" />
    </form>
  )
}
