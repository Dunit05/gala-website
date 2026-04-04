"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ChevronDown,
  Star,
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
      "For undergraduate and graduate students from all other faculties at Ontario Tech.",
  },
  {
    title: "Alumni",
    price: "$55",
    description:
      "For all Ontario Tech alumni attending the gala.",
  },
  {
    title: "External Guest",
    price: "$65",
    description:
      "For guests and students from outside Ontario Tech.",
  },
  {
    title: "Table Ticket (10 Seats)",
    price: "$450",
    description:
      "Reserved 10-seat table package for Ontario Tech staff and departments & external company guests.",
  },
];

const highlights = [
  {
    title: "Cocktail Reception",
    text: "Signature mocktails, arrival photos, luxe lobby styling, and a polished welcome experience.",
  },
  {
    title: "Buffet Gala Dinner",
    text: "A fully dressed main hall with formal dining, elegant décor, and dramatic lighting.",
  },
  {
    title: "Awards & Scholarships",
    text: "A refined stage program celebrating standout students and society achievements.",
  },
  {
    title: "Gala Games & Contests",
    text: "Interactive games, raffle moments, and crowd contests that keep the energy high throughout the evening.",
  },
  {
    title: "Late-Night Energy",
    text: "A dance floor finale, music, social programming, and a memorable late-night reveal.",
  },
];

const faqs = [
  {
    q: "What is the dress code?",
    a: "Formal black tie attire with a subtle Monte Carlo influence. Bow ties are encouraged, and guests are invited to dress to impress. Think colours like black, white, gold, silver, red.",
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
    a: "Ontario Tech students, alumni, staff, faculty, and external guests depending on ticket type.",
  },
  {
    q: "Will there be food?",
    a: "Yes. Guests will enjoy a buffet dinner, signature drinks, and a late-night snack service.",
  },
  {
    q: "How do I get there?",
    a: "The Durham Convention Centre is accessible by car, public transit, and rideshare. We recommend carpooling or using rideshare services for the best experience.",
  },
  {
    q: "Is there parking available?",
    a: "Yes. Parking is available at the Durham Convention Centre free of charge.",
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

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
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
      title: "FBIT Awards",
      text: "Cast your vote for the Professor & TA of the Year in FBIT who showed outstanding leadership, initiative, and impact this year.",
      button: "Vote for FBIT Awards",
      accent: "from-amber-300/20 via-amber-100/5 to-transparent",
    },
    {
      title: "Science Awards",
      text: "Recognize Science students for scholarships who made a meaningful contribution through excellence, dedication, and community involvement, along with the professor of the year.",
      button: "Vote for Science Awards",
      accent: "from-sky-300/20 via-sky-100/5 to-transparent",
    },
  ];

  return (
    <section id="vote" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="Cast Your Vote"
        title={
          <>
            Cast Your Vote. Celebrate <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Excellence</span>.
          </>
        }
        text="Choose your award category below and help spotlight thoese who made the biggest impact this year."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {awardCards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} transition={{ duration: 0.45 }} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border-white/10 bg-black/40 text-white">
              <div className={`relative aspect-[16/10] border-b border-white/10 bg-gradient-to-br ${card.accent}`}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.35))]" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-300">Society Recognition</p>
                    <p className="mt-3 text-3xl font-semibold">{card.title}</p>
                  </div>
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-7 text-neutral-300">{card.text}</p>
                <Button
                  disabled
                  className="mt-6 cursor-not-allowed rounded-2xl bg-amber-300 text-black opacity-60 hover:bg-amber-300"
                  title="Voting forms are not live yet"
                >
                  {card.button}
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
  const placeholders = [
    {
      society: "BITSoc",
      accent: "from-amber-300/20 via-transparent to-transparent",
    },
    {
      society: "SciCo",
      accent: "from-sky-300/20 via-transparent to-transparent",
    },
  ];

  return (
    <section id="presidents-messages" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="Presidents’ Messages"
        title={
          <>
            A Look Back at a Defining <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Year</span>.
          </>
        }
        text="Read reflections from both societies on the moments, milestones, and student impact that led into gala night."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {placeholders.map((item) => (
          <motion.div key={item.society} variants={fadeUp} transition={{ duration: 0.45 }}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-black/40 text-white">
              <div className={`relative min-h-[280px] bg-gradient-to-br ${item.accent}`}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.35))]" />
                <CardContent className="relative flex min-h-[280px] flex-col justify-end p-8">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-300">{item.society}</p>
                  <h3 className="mt-3 text-4xl font-semibold text-amber-200">Coming Soon</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">Messages will be added once final society statements are approved.</p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default function ANightInMonteCarloSite() {
  return (
    <div id="top" className="min-h-screen bg-[#060606] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.06),_transparent_18%),linear-gradient(to_bottom,#090909,#050505,#090909)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="inline-flex items-center" aria-label="Back to top">
            <Image
              src="/logo.png"
              alt="BITSoc and SciCo logo"
              width={240}
              height={72}
              priority
              className="h-16 w-auto md:h-20"
            />
          </a>
          <nav className="hidden items-center gap-6 text-md text-neutral-300 lg:flex">
            <a href="#about" className="transition hover:text-amber-200">About</a>
            <a href="#tickets" className="transition hover:text-amber-200">Tickets</a>
            <a href="#program" className="transition hover:text-amber-200">Program</a>
            <a href="#awards" className="transition hover:text-amber-200">Awards</a>
            <a href="#vote" className="transition hover:text-amber-200">Vote</a>
            <a href="#faq" className="transition hover:text-amber-200">FAQ</a>
          </nav>
          <Button asChild className="rounded-3xl bg-amber-300 px-5 text-black hover:bg-amber-200">
            <a href="https://shop.otubitsoc.com">Buy Tickets</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="mx-auto max-w-5xl">
              <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="text-center">
                <p className="text-xl font-light italic text-amber-100/90 md:text-2xl">Ontario Tech’s Luxury End-of-Year Gala</p>
                <h1 className="mt-4 overflow-visible pb-[0.14em] text-4xl font-semibold sm:text-6xl md:pb-[0.18em] md:text-8xl">
                  <span className="font-slight block overflow-visible bg-gradient-to-b from-white via-amber-50 to-amber-200 bg-clip-text px-2 pb-[0.2em] pt-[0.2em] text-[1.05em] leading-[1.34] text-transparent sm:text-[1.08em] md:text-[1.12em]">
                    A Night in
                  </span>
                  <span className="block bg-gradient-to-b from-white via-amber-100 to-amber-400 bg-clip-text pb-[0.08em] leading-[1.06] text-transparent md:leading-[1.04]">
                    Monte Carlo
                  </span>
                </h1>
                <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
                  A cinematic gala experience inspired by Riviera glamour, presented by the Buisness & IT Society & Science Council, featuring a styled buffet dinner, awards,
                  signature drinks, photo moments, entertainment, and a polished after-dark finale.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button asChild className="rounded-2xl bg-amber-300 px-6 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                    <a href="https://shop.otubitsoc.com">Buy Tickets</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10 hover:text-white">
                    <a href="#vote">Cast Your Vote</a>
                  </Button>
                </div>
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-5 text-left sm:grid-cols-3">
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
              ["350+", "Guests"],
              ["20+", "Awards"],
              ["2", "Societies"],
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
            <SectionHeading
              eyebrow="About the Event"
              title={
                <>
                  More than just a gala. It's a{" "}
                  <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                    Cinematic
                  </span>{" "}
                  Experience.
                </>
              }
              text="A night designed to celebrate ambition, community, and achievement. Bringing together students, alumni, and leaders from both societies for an unforgettable evening of elegance, recognition, and energy."
            />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className={item.title === "Late-Night Energy" ? "sm:col-span-2" : ""}
                >
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
              <SectionHeading eyebrow="Tickets" title="Choose the Right Ticket for Your Night." text="All ticket holders receive access to A Night in Monte Carlo, including entry, formal programming, dining, and the gala experience." />
              <a href="https://shop.otubitsoc.com" className="text-sm uppercase tracking-[0.3em] text-amber-300 hover:text-amber-200">shop.otubitsoc.com</a>
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {tickets.map((ticket) => (
                <motion.div key={ticket.title} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="group h-full rounded-[2rem] border-white/10 bg-black/40 text-white transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-black/60">
                    <CardContent className="flex h-full flex-col p-6">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/70">A Night in Monte Carlo</p>
                      <h3 className="mt-4 text-2xl font-medium">{ticket.title}</h3>
                      <p className="mt-5 text-5xl font-semibold text-amber-300">{ticket.price}</p>
                      <p className="mt-5 flex-1 text-sm leading-7 text-neutral-300">{ticket.description}</p>
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
          <SectionHeading eyebrow="Program" title="A Run of Show Built to Keep the Night Moving." text="From arrival to final song, the evening is designed to feel seamless, elevated, and exciting without losing the party energy." />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45 }} className="mt-12">
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-10 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Program Update</p>
                <h3 className="mt-4 text-3xl font-semibold text-amber-300">Schedule TBD</h3>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="awards" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <Card className="rounded-[2rem] border-white/10 bg-gradient-to-b from-white/8 to-white/4 text-white">
                <CardContent className="p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Awards</p>
                  <h2 className="mt-4 text-4xl font-semibold">Celebrate Achievement in Style.</h2>
                  <p className="mt-6 text-base leading-8 text-neutral-300">The formal program will spotlight awards, scholarships, society recognition, and standout moments from across BITSoc & SciCo.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2">
              {[
                "Leadership Recognition",
                "Scholarship Recognition",
                "Society Appreciation Moments",
                "Memorable Closing Celebration",
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="rounded-3xl border-white/10 bg-black/30 text-white">
                    <CardContent className="flex items-center gap-4 p-7">
                      <Star className="h-5 w-5 shrink-0 text-amber-300" />
                      <span className="text-lg font-medium tracking-tight text-white md:text-xl">{item}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* <section id="Vote" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-[2rem] border-white/10 bg-black/40 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-amber-300">
                      <Award className="h-5 w-5" />
                      <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Awards Voting</p>
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold">Cast your vote. Shape the spotlight.</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">Cast your vote below and recognize the thoese whose leadership, impact, and excellence defined the year across FBIT and Science.</p>
                    <Button asChild className="mt-6 rounded-2xl bg-amber-300 text-black hover:bg-amber-200">
                      <a href="#vote">Cast Your Vote</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-[2rem] border-white/10 bg-black/40 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-amber-300">
                      <Users className="h-5 w-5" />
                      <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Year In Review</p>
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold">The story behind the celebration.</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">Explore highlights from the year, key milestones, and reflections from both societies that set the stage for gala night.</p>
                    <Button asChild className="mt-6 rounded-2xl bg-amber-300 text-black hover:bg-amber-200">
                      <a href="#presidents-messages">View Year In Reviews</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section> */}

        <AwardsVotingPage />
        <PresidentsMessagesPage />

        {/* <section id="gallery" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="Gallery & Inspiration" title="Visual Atmosphere, Brand Moments, and Decor Direction." text="Use this site as a live event deck replacement with room inspiration, ticket artwork, decor moments, and gala styling references." />
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
        </section> */}

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Everything Guests Need to Know Before the <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Night</span> Arrives.
              </>
            }
            text="Clear, simple details for attendees, ticket buyers, and anyone planning their gala look."
          />
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
                  <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Join Ontario Tech’s Most Elegant Night of the Year.</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-300">Buy tickets now, plan your look, and get ready for a fully designed gala experience built to replace the usual slideshow with something far more memorable.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl bg-amber-300 px-6 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                    <a href="https://shop.otubitsoc.com">Buy Tickets Today</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10 hover:text-white">
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
            <a href="#top" className="inline-flex items-center" aria-label="Back to top">
              <Image
                src="/logo.png"
                alt="BITSoc and SciCo logo"
                width={260}
                height={78}
                className="h-14 w-auto"
              />
            </a>
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
              <a href="#vote" className="transition hover:text-amber-200">Awards Voting</a>
              <a href="#presidents-messages" className="transition hover:text-amber-200">Presidents’ Messages</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
