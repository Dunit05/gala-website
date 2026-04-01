"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  Sparkles,
  Award,
  Camera,
  Music4,
  UtensilsCrossed,
  ChevronDown,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tickets = [
  {
    title: "FBIT & FSc Student",
    price: "$45",
    description:
      "For undergraduate and graduate students in the Faculty of Business & IT and Faculty of Science.",
  },
  {
    title: "General Student",
    price: "$50",
    description:
      "For Ontario Tech students from all other faculties.",
  },
  {
    title: "Alumni",
    price: "$55",
    description:
      "For Ontario Tech alumni attending the gala.",
  },
  {
    title: "External Guest",
    price: "$65",
    description:
      "For guests and students from outside Ontario Tech.",
  },
  {
    title: "Department Table",
    price: "$450",
    description:
      "Reserved 10-seat table package for Ontario Tech staff and departments.",
  },
];

const timeline = [
  {
    time: "6:00 PM",
    title: "Doors Open & Cocktail Hour",
    text: "Arrival photos, signature mocktails, luxe lobby moments, and guest check-in.",
    icon: Camera,
  },
  {
    time: "7:15 PM",
    title: "Seating & Welcome",
    text: "Hosts open the evening and transition into the formal gala experience.",
    icon: Sparkles,
  },
  {
    time: "7:30 PM",
    title: "Seated Dinner",
    text: "An elegant dinner service with Monte Carlo-inspired atmosphere and styling.",
    icon: UtensilsCrossed,
  },
  {
    time: "8:45 PM",
    title: "Awards & Scholarships",
    text: "A polished stage segment recognizing student excellence and impact.",
    icon: Award,
  },
  {
    time: "9:30 PM",
    title: "Entertainment & Draws",
    text: "Feature moments, raffle excitement, and crowd energy before the party set begins.",
    icon: Ticket,
  },
  {
    time: "10:00 PM",
    title: "Dance Floor Opens",
    text: "DJ set, social energy, and the full gala after-dark experience.",
    icon: Music4,
  },
  {
    time: "11:30 PM",
    title: "Late Night Snack",
    text: "A fun final food reveal to keep the room buzzing through the night.",
    icon: UtensilsCrossed,
  },
  {
    time: "1:00 AM",
    title: "Event Close",
    text: "Final song, departures, and the end of an unforgettable night.",
    icon: Clock3,
  },
];

const highlights = [
  {
    title: "Cocktail Reception",
    text: "Signature mocktails, arrival photos, luxe lobby styling, and a polished welcome experience.",
  },
  {
    title: "Seated Gala Dinner",
    text: "A fully dressed main hall with formal dining, elegant décor, and dramatic lighting.",
  },
  {
    title: "Awards & Scholarships",
    text: "A refined stage program celebrating standout students and society achievements.",
  },
  {
    title: "Late-Night Energy",
    text: "A dance floor finale, music, social programming, and a memorable late-night reveal.",
  },
];

const faqs = [
  {
    q: "What is the dress code?",
    a: "Formal black tie attire. Bow ties are encouraged, and guests are invited to dress to impress.",
  },
  {
    q: "Where is the event?",
    a: "Durham Convention Centre, 630 Beck Crescent, Ajax, Ontario.",
  },
  {
    q: "When do doors open?",
    a: "Doors open at 6:00 PM and the gala concludes at 1:00 AM.",
  },
  {
    q: "Where do I buy tickets?",
    a: "Tickets are available online through shop.otubitsoc.com.",
  },
  {
    q: "Who can attend?",
    a: "Ontario Tech students, alumni, staff, faculty, and approved external guests depending on ticket type.",
  },
  {
    q: "Will there be food?",
    a: "Yes. Guests will enjoy a seated dinner, signature drinks, and a late-night snack service.",
  },
];

const gallery = [
  "Ticket cover branding and launch visuals",
  "Monte Carlo-inspired lobby styling",
  "Luxury table design and centrepieces",
  "Stage + awards presentation moment",
  "Photo wall, balloons, and branded details",
  "Dance floor finale and after-dark energy",
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <p className="text-xs uppercase tracking-[0.38em] text-amber-200/70">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-neutral-300 md:text-lg">{text}</p> : null}
    </motion.div>
  );
}

function InfoPill({ icon: Icon, label, value }: { icon: React.ComponentType<any>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-amber-200/70">
        <Icon className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-[0.3em]">{label}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-100 md:text-base">{value}</p>
    </div>
  );
}

function AwardsVotingPage() {
  const awardCards = [
    {
      title: "BITSoc Student Awards",
      text: "Nominate and vote for standout BITSoc students whose leadership, impact, and presence shaped the year.",
      button: "Vote for BITSoc Awards",
      href: "#",
      accent: "from-amber-300/20 via-amber-100/5 to-transparent",
    },
    {
      title: "SciCo Student Awards",
      text: "Celebrate the students who made a lasting impact across SciCo through dedication, initiative, and community spirit.",
      button: "Vote for SciCo Awards",
      href: "#",
      accent: "from-sky-300/20 via-sky-100/5 to-transparent",
    },
  ];

  return (
    <section id="awards-voting" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="Awards Voting"
        title="Help shape the recognition moments of the night."
        text="This can live as its own dedicated page with separate society voting forms, or as a secondary section linked from the homepage."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {awardCards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} transition={{ duration: 0.45 }}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-black/40 text-white">
              <div className={`relative aspect-[16/10] border-b border-white/10 bg-gradient-to-br ${card.accent}`}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.35))]" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-300">Student Recognition</p>
                    <p className="mt-3 text-3xl font-semibold">{card.title}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm leading-7 text-neutral-300">{card.text}</p>
                <Button asChild className="mt-6 rounded-2xl bg-amber-300 text-black hover:bg-amber-200">
                  <a href={card.href}>{card.button}</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function PresidentsMessagesPage() {
  const messages = [
    {
      society: "BITSoc",
      title: "A Year of Growth, Leadership, and Momentum",
      message:
        "Use this area for a short president’s message reflecting on the year, major wins, community-building, and the energy BITSoc is bringing into gala night.",
      bullets: [
        "Flagship events and collaborations",
        "Student leadership milestones",
        "Community growth and engagement",
      ],
      accent: "from-amber-300/20 via-transparent to-transparent",
    },
    {
      society: "SciCo",
      title: "A Year of Impact, Community, and Celebration",
      message:
        "Use this area to highlight SciCo’s achievements, memorable events, student success, and a message of appreciation before the celebration begins.",
      bullets: [
        "Academic and community highlights",
        "Successful events and initiatives",
        "Recognition of the SciCo community",
      ],
      accent: "from-sky-300/20 via-transparent to-transparent",
    },
  ];

  return (
    <section id="presidents-messages" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="Presidents’ Messages"
        title="A look back at the year from both societies."
        text="This section can act like a digital yearbook page with short reflections, milestone highlights, and photos from the year leading into gala night."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 space-y-6"
      >
        {messages.map((item) => (
          <motion.div key={item.society} variants={fadeUp} transition={{ duration: 0.45 }}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-black/40 text-white">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className={`relative min-h-[280px] border-b border-white/10 bg-gradient-to-br ${item.accent} lg:border-b-0 lg:border-r`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3))]" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-300">{item.society}</p>
                    <h3 className="mt-3 text-3xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">
                      Add one or two real photos from the year here for a more personal, society-led feel.
                    </p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-base leading-8 text-neutral-300">{item.message}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-200">
                        {bullet}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default function MidnightInMonteCarloSite() {
  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.06),_transparent_18%),linear-gradient(to_bottom,#090909,#050505,#090909)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-amber-200/70">BITSoc × SciCo</p>
            <p className="mt-1 text-sm font-medium text-white">Midnight in Monte Carlo</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 lg:flex">
            <a href="#about" className="transition hover:text-amber-200">About</a>
            <a href="#tickets" className="transition hover:text-amber-200">Tickets</a>
            <a href="#program" className="transition hover:text-amber-200">Program</a>
            <a href="#awards" className="transition hover:text-amber-200">Awards</a>
            <a href="#extra-pages" className="transition hover:text-amber-200">More</a>
            <a href="#faq" className="transition hover:text-amber-200">FAQ</a>
          </nav>
          <Button asChild className="rounded-2xl bg-amber-300 px-5 text-black hover:bg-amber-200">
            <a href="https://shop.otubitsoc.com">Buy Tickets</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.38em] text-amber-200/75">
                  <span>BITSoc × SciCo Present</span>
                  <span className="h-px w-10 bg-amber-300/40" />
                  <span>A Bow Tie Affair</span>
                </div>
                <p className="text-xl font-light italic text-amber-100/90 md:text-2xl">Ontario Tech’s Luxury End-of-Year Gala</p>
                <h1 className="mt-4 bg-gradient-to-b from-white via-amber-100 to-amber-400 bg-clip-text text-6xl font-semibold leading-none text-transparent md:text-8xl">
                  Midnight in Monte Carlo
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
                  A cinematic gala experience inspired by Riviera glamour — featuring a fully styled dinner, awards,
                  signature drinks, photo moments, entertainment, and a polished after-dark finale.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="rounded-2xl bg-amber-300 px-6 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                    <a href="https://shop.otubitsoc.com">Buy Tickets</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10">
                    <a href="#program">View Program</a>
                  </Button>
                </div>
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: CalendarDays, label: "Date", value: "April 25, 2026" },
                    { icon: Clock3, label: "Time", value: "Doors 6:00 PM · Ends 1:00 AM" },
                    { icon: MapPin, label: "Venue", value: "Durham Convention Centre" },
                  ].map((item) => (
                    <motion.div key={item.label} variants={fadeUp} transition={{ duration: 0.45 }}>
                      <InfoPill {...item} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }} className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-300/15 via-transparent to-white/5 blur-3xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#0b0b0b_0%,#111111_35%,#050505_100%)] p-6">
                    <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-amber-300/20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_30%)] p-6">
                      <div>
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-amber-200/70">
                          <span>BITSoc</span>
                          <span>SciCo</span>
                        </div>
                        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
                      </div>
                      <div>
                        <p className="text-xl italic text-amber-100">A Bow Tie Affair</p>
                        <p className="mt-3 text-5xl font-semibold leading-none text-amber-300 md:text-6xl">Midnight</p>
                        <p className="mt-1 text-4xl font-light text-white md:text-5xl">in Monte Carlo</p>
                        <p className="mt-8 max-w-sm text-sm leading-7 text-neutral-300">
                          Dress to impress for a luxe Monte Carlo evening of dining, awards, entertainment, and unforgettable atmosphere.
                        </p>
                      </div>
                      <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.28em] text-amber-100/70">
                        <span>OTU Gala 2026</span>
                        <span>shop.otubitsoc.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-12 flex justify-center">
              <a href="#about" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-neutral-400 hover:text-amber-200">
                Scroll
                <ChevronDown className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="grid gap-6 md:grid-cols-4">
            {[
              ["350+", "Expected Guests"],
              ["5", "Ticket Options"],
              ["1", "Luxury Theme"],
              ["∞", "Photo Moments"],
            ].map(([num, label]) => (
              <motion.div key={label} variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-3xl border-white/10 bg-white/5 text-white backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-semibold text-amber-300">{num}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-300">{label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading eyebrow="About the Event" title="A gala experience designed to feel cinematic, polished, and memorable." text="Midnight in Monte Carlo is the collaborative annual gala hosted by BITSoc and SciCo. Inspired by Riviera elegance, the evening transforms a traditional student formal into a premium experience with a dramatic dinner room, awards program, photo installations, signature drinks, and a full social finale." />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div key={item.title} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="h-full rounded-3xl border-white/10 bg-gradient-to-b from-white/8 to-white/4 text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-amber-200">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-300">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="tickets" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <SectionHeading eyebrow="Tickets" title="Choose the right ticket for your night." text="All ticket holders receive access to Midnight in Monte Carlo, including entry, formal programming, dining, and the gala experience." />
              <a href="https://shop.otubitsoc.com" className="text-sm uppercase tracking-[0.3em] text-amber-300 hover:text-amber-200">shop.otubitsoc.com</a>
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {tickets.map((ticket) => (
                <motion.div key={ticket.title} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="group h-full rounded-[2rem] border-white/10 bg-black/40 text-white transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-black/60">
                    <CardContent className="p-6">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/70">Midnight in Monte Carlo</p>
                      <h3 className="mt-4 text-2xl font-medium">{ticket.title}</h3>
                      <p className="mt-5 text-5xl font-semibold text-amber-300">{ticket.price}</p>
                      <p className="mt-5 text-sm leading-7 text-neutral-300">{ticket.description}</p>
                      <Button asChild className="mt-8 rounded-2xl bg-amber-300 text-black hover:bg-amber-200">
                        <a href="https://shop.otubitsoc.com">Buy Ticket</a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="program" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="Program" title="A run of show built to keep the night moving." text="From arrival to final song, the evening is designed to feel seamless, elevated, and exciting without losing the party energy." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-12 space-y-4">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.time} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                    <CardContent className="grid gap-4 p-6 md:grid-cols-[170px_1fr] md:items-start">
                      <div className="flex items-center gap-3 text-amber-300">
                        <Icon className="h-5 w-5" />
                        <span className="text-xl font-semibold">{item.time}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-neutral-300">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section id="awards" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <Card className="rounded-[2rem] border-white/10 bg-gradient-to-b from-white/8 to-white/4 text-white">
                <CardContent className="p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Awards</p>
                  <h2 className="mt-4 text-4xl font-semibold">Celebrate achievement in style.</h2>
                  <p className="mt-6 text-base leading-8 text-neutral-300">The formal program will spotlight awards, scholarships, society recognition, and standout moments from across the Ontario Tech community.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2">
              {[
                "Student leadership recognition",
                "Scholarship spotlights",
                "Society appreciation moments",
                "Presentation visuals on stage",
                "Winner photo opportunities",
                "Memorable closing celebration",
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="rounded-3xl border-white/10 bg-black/30 text-white">
                    <CardContent className="flex items-center gap-3 p-6 text-neutral-200">
                      <Star className="h-4 w-4 text-amber-300" />
                      <span>{item}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="extra-pages" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="More to Explore" title="Keep the homepage tight and push deeper content to dedicated pages." text="This gives you space for award voting and year-in-review content without making the main site feel too long." />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-12 grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-[2rem] border-white/10 bg-black/40 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-amber-300">
                      <Award className="h-5 w-5" />
                      <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Awards Voting Page</p>
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold">Let students vote before gala night.</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">Create a dedicated page with separate BITSoc and SciCo award voting sections, each with its own visuals and form link.</p>
                    <Button asChild className="mt-6 rounded-2xl bg-amber-300 text-black hover:bg-amber-200">
                      <a href="#awards-voting">Preview Voting Section</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-[2rem] border-white/10 bg-black/40 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-amber-300">
                      <Users className="h-5 w-5" />
                      <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Presidents’ Messages</p>
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold">Showcase the year behind the celebration.</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">Add a second page with society reflections, photo highlights, year-in-review content, and president messages from both BITSoc and SciCo.</p>
                    <Button asChild className="mt-6 rounded-2xl bg-amber-300 text-black hover:bg-amber-200">
                      <a href="#presidents-messages">Preview Message Section</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <AwardsVotingPage />
        <PresidentsMessagesPage />

        <section id="gallery" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="Gallery & Inspiration" title="Visual atmosphere, brand moments, and décor direction." text="Use this site as a live event deck replacement with room inspiration, ticket artwork, décor moments, and gala styling references." />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-12 grid gap-4 md:grid-cols-3">
              {gallery.map((label, i) => (
                <motion.div key={label} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border-white/10 bg-black/30 text-white">
                    <CardContent className="relative flex h-full items-end p-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.15),_transparent_35%)] transition duration-500 group-hover:scale-110" />
                      <div className="relative">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-amber-200/70">Gallery {i + 1}</p>
                        <p className="text-2xl font-medium">{label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="FAQ" title="Everything guests need to know before the night arrives." text="Clear, simple details for attendees, ticket buyers, and anyone planning their gala look." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <motion.div key={item.q} variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium">{item.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
            <Card className="rounded-[2rem] border-amber-300/20 bg-gradient-to-r from-amber-300/10 via-white/5 to-amber-300/10 text-white">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-12">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Reserve Your Spot</p>
                  <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Join Ontario Tech’s most elegant night of the year.</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-300">Buy tickets now, plan your look, and get ready for a fully designed gala experience built to replace the usual slideshow with something far more memorable.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl bg-amber-300 px-6 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                    <a href="https://shop.otubitsoc.com">Buy Tickets Today</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10">
                    <a href="#tickets">View Ticket Types</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">BITSoc × SciCo</p>
            <p className="mt-3 text-lg font-medium">Midnight in Monte Carlo</p>
            <p className="mt-3 text-sm leading-7 text-neutral-400">A collaborative gala experience for the Ontario Tech community.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Event Details</p>
            <div className="mt-4 space-y-2 text-sm text-neutral-300">
              <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-amber-300" /> April 25, 2026</p>
              <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-amber-300" /> 6:00 PM – 1:00 AM</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-300" /> Durham Convention Centre</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Quick Links</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-300">
              <a href="https://shop.otubitsoc.com" className="transition hover:text-amber-200">Buy Tickets</a>
              <a href="#awards-voting" className="transition hover:text-amber-200">Awards Voting</a>
              <a href="#presidents-messages" className="transition hover:text-amber-200">Presidents’ Messages</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
