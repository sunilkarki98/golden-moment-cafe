"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    src: "/images/place.png",
    alt: "Golden Moment café exterior and Canberra landscape at golden hour",
    eyebrow: "01 — Arrive",
    title: "Come in from the day.",
    copy: "A warm corner of Canberra, made for the first coffee and the last conversation.",
    position: "center",
  },
  {
    src: "/images/intro-dining.jpg",
    alt: "Warm interior dining atmosphere at Golden Moment café",
    eyebrow: "02 — Settle in",
    title: "Stay for the moment.",
    copy: "Sunlight, honest materials and a table that is always ready for one more.",
    position: "center",
  },
  {
    src: "/images/food-hands.jpg",
    alt: "Hands preparing food with care at Golden Moment café",
    eyebrow: "03 — Savour",
    title: "Made here. Enjoyed slowly.",
    copy: "Seasonal plates and carefully made coffee, shared at an unhurried pace.",
    position: "center",
  },
];

export default function DiningExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      const viewport = viewportRef.current;
      if (!root || !viewport) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const panels = gsap.utils.toArray<HTMLElement>("[data-scene]", root);
      const captions = gsap.utils.toArray<HTMLElement>("[data-caption]", root);

      if (reduceMotion) {
        gsap.set(panels, { autoAlpha: 1, scale: 1 });
        gsap.set(captions, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(panels, { autoAlpha: 0, scale: 1.12 });
      gsap.set(panels[0], { autoAlpha: 1, scale: 1 });
      gsap.set(captions, { autoAlpha: 0, y: 28 });
      gsap.set(captions[0], { autoAlpha: 1, y: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: viewport,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scenes.forEach((_, index) => {
        if (index === 0) {
          timeline.to(panels[0], { scale: 1.06, duration: 1, ease: "none" }, 0);
          return;
        }

        const at = index;
        timeline
          .to(panels[index - 1], { autoAlpha: 0, scale: 0.96, duration: 0.32, ease: "power2.inOut" }, at - 0.14)
          .to(captions[index - 1], { autoAlpha: 0, y: -20, duration: 0.2, ease: "power2.in" }, at - 0.12)
          .to(panels[index], { autoAlpha: 1, scale: 1, duration: 0.55, ease: "power2.out" }, at)
          .fromTo(captions[index], { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.38, ease: "power3.out" }, at + 0.08)
          .to(panels[index], { scale: 1.06, duration: 0.82, ease: "none" }, at + 0.18);
      });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="experience" aria-labelledby="experience-heading" className="relative h-[300svh] bg-[#171310]">
      <div ref={viewportRef} className="relative h-svh min-h-[620px] w-full overflow-hidden bg-[#171310]">
        <div className="absolute inset-0">
          {scenes.map((scene, index) => (
            <div key={scene.src} data-scene className="absolute inset-0 will-change-transform">
              <Image src={scene.src} alt={scene.alt} fill priority={index === 0} sizes="100vw" className="object-cover" style={{ objectPosition: scene.position }} />
              <div aria-hidden="true" className="absolute inset-0 bg-[#171310]/25" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#171310]/85 via-[#171310]/25 to-transparent" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#171310]/80 via-transparent to-[#171310]/25" />
            </div>
          ))}
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-7 sm:px-10 sm:py-9 lg:px-16 lg:py-12">
          <div className="flex items-center justify-between text-white/65">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em]">Golden Moment</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.22em]">Canberra · Australia</span>
          </div>

          <div className="max-w-[620px] pb-8 sm:pb-12 lg:pb-16">
            {scenes.map((scene, index) => (
              <div key={scene.eyebrow} data-caption className={index === 0 ? "" : "absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-10 sm:right-10 lg:bottom-16 lg:left-16"}>
                <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4a87a]">{scene.eyebrow}</p>
                <h2 id={index === 0 ? "experience-heading" : undefined} className="max-w-[620px] font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.055em] text-[#f5efe5]">{scene.title}</h2>
                <p className="mt-6 max-w-[360px] font-sans text-sm leading-7 text-white/70 sm:text-[15px]">{scene.copy}</p>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-between">
            <Link href="#visit" className="group inline-flex items-center gap-3 border-b border-white/45 pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-[#d4a87a] hover:text-[#d4a87a]">
              Visit our place
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <span className="hidden font-sans text-[10px] uppercase tracking-[0.22em] text-white/45 sm:block">Scroll to explore</span>
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 h-px w-full bg-white/20" />
      </div>
    </section>
  );
}
