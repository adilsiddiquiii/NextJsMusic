"use client";
 
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

function CardsMoving() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
     <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Hear Our Harmony: Voices of Success</h2>
     <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
       <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
       </div>
     </div>
    </div>
  )
}


const testimonials = [
  {
    quote:
      "Joining this music school completely transformed my learning experience. The instructors are supportive, and the lessons are easy to follow yet very effective.",
    name: "Aarav Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "I always wanted to learn singing, but I lacked confidence. This platform helped me improve my vocals step by step and perform in front of others.",
    name: "Neha Verma",
    title: "Vocal Music Student",
  },
  {
    quote:
      "The personalized learning path made a huge difference for me. I could practice at my own pace and still get guidance whenever I needed it.",
    name: "Rohit Mehta",
    title: "Piano Student",
  },
  {
    quote:
      "The live classes and practice tracking tools kept me motivated and consistent. I finally feel confident about my musical skills.",
    name: "Sneha Kapoor",
    title: "Music Theory Student",
  },
  {
    quote:
      "The instructors are extremely knowledgeable and friendly. Learning music here feels inspiring and enjoyable rather than stressful.",
    name: "Kunal Singh",
    title: "Drums Student",
  },
];








export default CardsMoving
