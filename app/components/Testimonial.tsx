import React from "react";
import Image from "next/image";

const testimonial = [
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    avatar: "/assets/profile-1.jpg",
    name: "Satish Patel",
    title: "Founder & CEO, Huddle",
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    avatar: "/assets/profile-2.jpg",
    name: "Bruce McKenzie",
    title: "Founder & CEO, Huddle",
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    avatar: "/assets/profile-3.jpg",
    name: "Iva Boyd",
    title: "Founder & CEO, Huddle",
  },
];

export default function Testimonial() {
  return (
    <section>
      {testimonial.map((item, index) => (
        <div key={index}>
          <div>
            <p>{item.text}</p>
            <div>
              <Image src={item.avatar} width={24} height={24} alt="avatar" />
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
