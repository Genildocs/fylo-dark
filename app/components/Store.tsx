import React from "react";
import Image from "next/image";

export default function Store() {
  return (
    <section>
      <Image
        src={"/assets/illustration-intro.png"}
        width={720}
        height={534}
        alt={"illustration-intro"}
        className="pl-8 pr-8 mt-14 mb-8"
      />
      <div>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
      <button className="btn">Get Started</button>
    </section>
  );
}
