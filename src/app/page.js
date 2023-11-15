"use client";
import { useState } from "react";
import IconList from "../../public/IconList";
import IllustrationMobile from "../../public/IllustrationMobile";
import Image from "next/image";
import SuccessPage from "@/components/SuccessPage";
import { useForm } from "react-hook-form";

export default function Home() {
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("")
  const products = [
    { id: 1, description: "Product discovery and building what matters" },
    { id: 2, description: "Measuring to ensure updates are a success" },
    { id: 3, description: "And much more!" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }= useForm()


  const onSubmit = (data)=>{
    setEmail(data.email)
    reset
    setSubscribe(true)
  }
  const errorMessage = errors?.email?.message ?? ""
  return (
    <main className="flex flex-col sm:flex-row-reverse sm:py-10 h-screen">
      <div className="sm:hidden">
        <IllustrationMobile />
      </div>
      <div className="hidden sm:block relative w-[50%] h-full">
        <Image
          src="/IllustrationDesktop.svg"
          alt="Illustration Desktop"
          fill={true}
        />
      </div>
      <div className="p-4 sm:flex sm:flex-col sm:justify-center">
        <div className="mt-5 flex flex-col gap-6">
          <h1 className="font-bold text-4xl sm:text-7xl text-darkSlate">
            Stay updated!
          </h1>
          <p>Join 60,000+ product managers receiving monthly updates on: </p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {products.map((product) => (
            <div className="flex gap-3" key={product.id}>
              <IconList />
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">

            <label className="text-xs sm:text-lg font-bold">
              Email address
            </label>
            <span className="text-xs sm:text-lg text-red">{errorMessage}</span>
            </div>
            <input
              {...register("email",{
                required: "Email is required",
                pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Valid email required"}
              }) }
              className= {`px-5 py-3 placeholder:font-normal border-solid border rounded-lg border-grey disabled:bg-white focus:ring-darkSlate ${errors.email?(" bg-whiteRed text-red border-red"):("") }`}
              placeholder="email@company.com"
            />
            <button
              type="submit"
              className="hover:bg-gradient-to-r from-pink to-orange mt-4 text-white font-medium bg-darkSlate py-4 rounded-lg px-5"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="absolute top-0">
        {subscribe && (
          <SuccessPage
            email={email}
            setSubscribe={setSubscribe}
          />
        )}
      </div>
    </main>
  );
}
