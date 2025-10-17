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
          alt="GoTalk Desktop"
          className="
            hidden lg:block 
            absolute inset-0 
            w-full h-full 
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
            bottom-[1vh] sm:bottom-[1vh] md:bottom-[1vh]
            left-1/2 -translate-x-1/2
            w-full flex justify-center
            px-4 sm:px-6
          "
        >
          <Button
            onClick={() => setIsRegistrationOpen(true)}
            className="
              bg-[#2a3d8c] hover:bg-[#2a3d8c]/80 
              text-white font-semibold 
              text-xs xs:text-sm sm:text-base md:text-lg 
              px-5 sm:px-8 py-3 sm:py-4 
              rounded-full shadow-lg sm:shadow-xl
              transform hover:scale-105 transition-all duration-300
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
