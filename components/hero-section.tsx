"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RegistrationPopup } from "./registration-popup"

export function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section
        className="
          relative w-full 
          h-[100dvh] lg:min-h-screen  /* mobile: full viewport, desktop: screen height */
          overflow-hidden flex items-center justify-center
          bg-black
        "
      >
        {/* Ảnh desktop */}
        <img
  src="/images/hero.webp"
  alt="GoTalk Hero"
  className="
    absolute inset-0 
    w-full 
    h-[700px]  // 👈 chỉnh px hoặc vh tuỳ ý
    object-cover object-center
  "
/>


        {/* Ảnh mobile */}
        <img
          src="/images/hero-mobile.webp"
          alt="GoTalk Mobile"
          className="
            block lg:hidden 
            absolute inset-0 
            w-full h-full 
            object-cover object-[center_top]
            align-top
          "
        />

        {/* Nút đăng ký */}
        <div
          className="
            absolute z-10 
            bottom-[1vh] sm:bottom-[2vh] md:bottom-[35vh]
            left-1/2 -translate-x-1/2 md:translate-x-[-650px]
            w-full flex justify-center
            px-4 sm:px-6
          "
        >
<Button
  onClick={() => setIsRegistrationOpen(true)}
  className="
    relative overflow-hidden
    bg-[#2a3d8c] hover:bg-[#2a3d8c]/90 
    text-white font-semibold 
    text-sm sm:text-lg md:text-xl
    px-10 sm:px-12 md:px-14 py-4 sm:py-5 md:py-6 
    rounded-full shadow-[0_0_15px_2px_rgba(255,215,0,0.6)]
    transform hover:scale-105 transition-all duration-300
    border-2 border-transparent
    before:absolute before:inset-0 before:rounded-full
    before:border-2 before:border-yellow-400 before:animate-border-run
    before:pointer-events-none
    
  "
>
            ĐĂNG KÝ NGAY - MIỄN PHÍ TƯ VẤN
          </Button>
        </div>
      </section>

      {/* Popup */}
      <RegistrationPopup
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </>
  )
}
