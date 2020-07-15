import React from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm({
    reValidateMode: onSubmit,
  })
  const onSubmit = data => console.log(data)
  console.log(watch("example"))

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form"
    >
      <label>Company:</label>
      <input
        type="text"
        name="nameRequired"
        ref={register({
          required: "Name required!",
          minLength: { value: 3, message: "Company name is invalid!" },
        })}
      />
      {errors.nameRequired && (
        <span className="error-message">{errors.nameRequired.message} </span>
      )}

      <label>First name:</label>
      <input
        type="text"
        name="firstNameRequired"
        ref={register({
          required: { value: true, message: "First name required!" },
          maxLength: { value: 20, message: "First name is invalid!" },
        })}
      />
      {errors.firstNameRequired && (
        <span className="error-message">
          {errors.firstNameRequired.message}
        </span>
      )}

      <label>Last name:</label>
      <input
        name="lastNameRequired"
        ref={register({
          required: { value: true, message: "Last name required!" },
          maxLength: { value: 20, message: "Last name is invalid!" },
          pattern: { value: /^[A-Za-z]+$/i, message: "Last name is invalid!" },
        })}
      />
      {errors.lastNameRequired && (
        <span className="error-message">{errors.lastNameRequired.message}</span>
      )}

      <label>Age:</label>
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />

      <label>Email:</label>
      <input type="text" name="email" ref={register} />

      <label>Password:</label>
      <input
        type="text"
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
