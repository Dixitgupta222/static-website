import React from "react";
import { useForm } from "react-hook-form";
export default function Form(props) {
  // const [fname, setFname] = useState('');
  // const [lname, setLname] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const data = {
  //     fname,
  //     lname,
  //     phone,
  //     email,
  //     message,
  //   };
  //   console.log(data);
  // };
  const { register, handleSubmit, formState: { errors,isSubmitting,isValid } } = useForm();
  function onSubmit(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
          }
        })
      }, 4000) 
      
    })
  
  }
  return (
    <form className="grid grid-cols-2 gap-4 md:gap-10" onSubmit={handleSubmit(onSubmit)}>
      <div className=" col-auto flex flex-col">
        <label className={`font-poppins capitalize text-[14px] font-normal text-[${props.label}]`}>
          First name
        </label>
        <input
          className={`border-b border-[${props.bordercolor}] bg-transparent px-2 py-1 focus-within:outline-none`}
          type="text"  {...register("fname", {required: true, maxLength: 80})}
        />
        {errors.fname && (<p className="text-red-700">Error</p>)}
      </div>
      <div className=" col-auto flex flex-col">
        <label className={`font-poppins capitalize text-[14px] font-normal text-[${props.label}]`}>
          Last name
        </label>
        <input
          className={`border-b border-[${props.bordercolor}] bg-transparent px-2 py-1 focus-within:outline-none`}
          type="text" {...register("lname", {required: true, maxLength: 80})}
        />
         {errors.lname && (<p className="text-red-700">Error</p>)}
      </div>
      <div className=" col-auto flex flex-col">
        <label className={`font-poppins capitalize text-[14px] font-normal text-[${props.label}]`}>
          Phone Number
        </label>
        <input
          className={`border-b border-[${props.bordercolor}] bg-transparent px-2 py-1 focus-within:outline-none`}
          type="tel"  {...register("number", {required: true, pattern: {value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i , message:"Invalid number.Please enter a valid number"}, minLength: 10})}
        />
         {errors.number && (errors.number.message != "" ? <p className=" text-red-700">{errors.number.message}</p> : <p className=" text-red-700">{errors.number.type}</p>)}
      </div>
      <div className=" col-auto flex flex-col">
        <label className={`font-poppins capitalize text-[14px] font-normal text-[${props.label}]`}>
          Email
        </label>
        <input
          className={`border-b border-[${props.bordercolor}] bg-transparent px-2 py-1 focus-within:outline-none`}
          type="email"  {...register("email", {required: true, pattern: {value: /^\S+@\S+$/i , message:"Invalid Email.Please enter a valid email"}})}
        />
         {errors.email && (errors.email.message != "" ? <p className=" text-red-700">{errors.email.message}</p> : <p className=" text-red-700">{errors.email.type}</p>)}
      </div>
      <div className=" col-span-full flex flex-col">
        <label className={`font-poppins capitalize text-[14px] font-normal text-[${props.label}]`}>
          Message
        </label>
        <textarea
          rows={2}
          className={`border-b border-[${props.bordercolor}] bg-transparent px-2 py-1 focus-within:outline-none`}
          type="text"  {...register("message", {required: true, maxLength: 1200})}
        />
         {errors.message && (<p className="text-red-700">Error</p>)}
      </div>
      <div className={`col-span-full flex items-${props.align} flex-col`}>
       { isSubmitting ?
        <p className={`text-center mx-auto md:mx-0 capitalize leading-normal font-bold text-[20px] text-[${props.button}] border-[1px] border-[${props.button}] py-[12px] px-[48px] block w-fit  duration-150 cursor-pointer hover:bg-[${props.button}] hover:text-[${props.buttonhover}] focus-within:outline-none`}>
          submitting
        </p>
        : <input
     className={`text-center leading-normal mt-4 mx-auto md:mx-0 capitalize font-bold text-[20px] text-[${props.button}] border-[1px] border-[${props.button}] py-[12px] px-[48px] block w-fit  duration-150 cursor-pointer hover:bg-[${props.button}] hover:text-[${props.buttonhover}] focus-within:outline-none`}
     type="submit"
     value="submit"
   /> 
      } 
     
      </div>
    </form>
  );
}
