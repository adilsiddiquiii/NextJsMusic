"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";


const content = [
{
  title: "Live Music Classes",
  description:
    "Join live interactive music classes with experienced instructors and get real-time feedback to improve your skills.",
},
{
  title: "Practice & Progress Tracking",
  description:
    "Track your daily practice, monitor your improvement, and stay motivated with structured lessons and insights.",
},
{
  title: "Personalized Learning Paths",
  description:
    "Follow customized learning paths based on your skill level, goals, and musical interests.",
},
{
  title: "Performance & Certification",
  description:
    "Showcase your talent through performances and earn certifications to validate your musical journey.",
},

];


function WhyChooseUs() {
  return (
    <div >
      <StickyScroll content ={content}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs
