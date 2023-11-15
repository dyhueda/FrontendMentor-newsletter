"use client";
import Image from "next/image";

export default function SuccessPage(props) {
  const email = props.email;

  const handleReturn = () => {
    props.setSubscribe(false);
  };
  return (
    <section className="flex items-center justify-center sm:bg-charcoal h-screen w-screen ">
      <div className="bg-white sm:bg-white flex flex-col h-full sm:h-auto sm:w-1/3 p-4 justify-between sm:rounded-3xl sm:py-10 sm:px-12">
        <div className="flex flex-col h-4/6 justify-center gap-7">
          <Image
            src="/icon-success.svg"
            alt="Illustration Desktop"
            width={64}
            height={64}
          />
          <h1 className="font-bold text-4xl text-darkSlate">
            Thanks for Subscribing!
          </h1>
          <p>
            A confirmation email has been sent to{" "}
            <b className="font-bold">{email}</b>. Please open it and click the
            button inside to confirm your subscription
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleReturn();
          }}
          className="w-full hover:bg-gradient-to-r from-pink to-orange mb-5 sm:mt-8 text-white font-medium bg-darkSlate py-4 rounded-lg px-5"
        >
          Dismiss message
        </button>
      </div>
    </section>
  );
}
