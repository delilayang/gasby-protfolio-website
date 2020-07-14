import React from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(watch("example"))

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form"
    >
      <label>name:</label>
      <input
        type="text"
        placeholder="name"
        name="nameRequired"
        ref={register({
          required: "NAME REQUIRED!",
          minLength: { value: 3, message: "Name is invalid!" },
        })}
      />
      {errors.nameRequired && (
        <span className="error-message">{errors.nameRequired.message} </span>
      )}
      <label>age:</label>
      <input type="number" placeholder="age" name="age" />
      <label>email:</label>
      <input type="text" placeholder="email" name="email" ref={register} />
      <label>password:</label>
      <input
        type="text"
        placeholder="password"
        name="passwordRequired"
        ref={register({
          required: "PASSWORD REQUIRED!",
          minLength: { value: 8, message: "TOO SHORT" },
        })}
      />
      {errors.passwordRequired && (
        <span className="error-message">{errors.passwordRequired.message}</span>
      )}
      <input type="submit" value="Submit" className="btn-submit" />
    </form>
  )
}
