"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const root = sectionRef.current;
            if (!root) return;
            const q = gsap.utils.selector(root);

            const prefersReduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReduced) {
                gsap.set(q(".contact-anim"), { autoAlpha: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                q(".contact-anim"),
                { y: 30, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: root,
                        start: "top 75%",
                        once: true,
                    },
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative w-full bg-background overflow-hidden py-16 sm:py-24"
        >
            <div className="content-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Side: Contact Info */}
                    <div className="flex flex-col">
                        <p className="contact-anim label-mini text-accent mb-4">Visit Us</p>
                        <h2 className="contact-anim font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-text mb-6">
                            Come say hello.
                        </h2>

                        {/* Google Rating Badge */}
                        <div className="contact-anim flex items-center gap-3 mb-12 bg-accent/5 w-max px-4 py-3 rounded-2xl border border-accent/10">
                            {/* Google G Icon */}
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="flex items-center gap-0.5">
                                    {/* 5 Stars */}
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-[#FBBC05]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-sans text-[11px] font-semibold text-text mt-0.5 uppercase tracking-[0.1em]">
                                    5.0 Rating on Google
                                </span>
                            </div>
                        </div>

                        <div className="contact-anim flex flex-col sm:flex-row gap-10 sm:gap-16 mb-12">
                            {/* Address */}
                            <div>
                                <h3 className="font-sans text-[12px] uppercase tracking-[0.15em] text-text-muted mb-3">Location</h3>
                                <p className="font-sans text-[15px] leading-[1.7] text-text">
                                    Shop 4/14 Moore St<br />
                                    Canberra ACT 2601
                                </p>
                            </div>

                            {/* Hours */}
                            <div className="w-full max-w-[280px]">
                                <h3 className="font-sans text-[12px] uppercase tracking-[0.15em] text-text-muted mb-4">Hours</h3>
                                <ul className="font-sans text-[14px] leading-[1.8] text-text flex flex-col gap-1.5">
                                    <li className="flex justify-between"><span>Monday</span> <span>7:00 AM – 2:30 PM</span></li>
                                    <li className="flex justify-between"><span>Tuesday</span> <span>6:00 AM – 4:00 PM</span></li>
                                    <li className="flex justify-between"><span>Wednesday</span> <span>6:00 AM – 4:30 PM</span></li>
                                    <li className="flex justify-between"><span>Thursday</span> <span>6:00 AM – 6:00 PM</span></li>
                                    <li className="flex justify-between"><span>Friday</span> <span>6:00 AM – 4:30 PM</span></li>
                                    <li className="flex justify-between"><span>Sat – Sun</span> <span>7:00 AM – 3:00 PM</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact & WhatsApp */}
                        <div className="contact-anim">
                            <h3 className="font-sans text-[12px] uppercase tracking-[0.15em] text-text-muted mb-4">Get in touch</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                <a
                                    href="tel:+61433056145"
                                    className="font-serif text-[1.5rem] text-text hover:text-accent transition-colors"
                                >
                                    +61 433 056 145
                                </a>
                                <span className="hidden sm:block w-8 h-px bg-border"></span>
                                <a
                                    href="https://wa.me/61433056145"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-white px-6 py-3 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                    </svg>
                                    <span className="font-sans text-[13px] font-semibold tracking-wide">WhatsApp Us</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Map Container */}
                    <div className="contact-anim relative w-full h-[300px] lg:h-[380px] rounded-3xl overflow-hidden bg-bone shadow-md border border-border mt-8 lg:mt-0">
                        <iframe
                            src="https://maps.google.com/maps?q=Shop%204%2F14%20Moore%20St%2C%20Canberra%20ACT%202601%2C%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "contrast(1.05)" }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
