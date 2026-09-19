import Image from "next/image";

const SCHEDULE: { day: string; classes: { time: string; name: string; coach: string }[] }[] = [
  {
    day: "Monday",
    classes: [
      { time: "6:00 AM", name: "Sunrise HIIT", coach: "Marcus" },
      { time: "12:00 PM", name: "Strength Lab", coach: "Priya" },
      { time: "6:30 PM", name: "Boxing Fundamentals", coach: "Diego" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "7:00 AM", name: "Power Yoga", coach: "Sana" },
      { time: "5:30 PM", name: "Spin Sprint", coach: "Marcus" },
      { time: "7:00 PM", name: "Olympic Lifting", coach: "Priya" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:00 AM", name: "Sunrise HIIT", coach: "Diego" },
      { time: "12:00 PM", name: "Mobility & Core", coach: "Sana" },
      { time: "6:30 PM", name: "Boxing Fundamentals", coach: "Diego" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "7:00 AM", name: "Power Yoga", coach: "Sana" },
      { time: "5:30 PM", name: "Spin Sprint", coach: "Marcus" },
      { time: "7:00 PM", name: "Strength Lab", coach: "Priya" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "6:00 AM", name: "Sunrise HIIT", coach: "Marcus" },
      { time: "12:00 PM", name: "Boxing Fundamentals", coach: "Diego" },
      { time: "6:00 PM", name: "Friday Night Lights (Circuit)", coach: "All Coaches" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "9:00 AM", name: "Family Bootcamp", coach: "Sana" },
      { time: "11:00 AM", name: "Olympic Lifting", coach: "Priya" },
    ],
  },
  {
    day: "Sunday",
    classes: [{ time: "10:00 AM", name: "Recovery Flow", coach: "Sana" }],
  },
];

const PLANS = [
  {
    name: "Basic",
    price: "$39",
    period: "/mo",
    features: ["Gym floor access", "2 classes / week", "Locker room access"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$69",
    period: "/mo",
    features: [
      "Unlimited gym floor access",
      "Unlimited classes",
      "1 PT session / month",
      "Nutrition check-ins",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "$119",
    period: "/mo",
    features: [
      "Everything in Pro",
      "4 PT sessions / month",
      "Recovery suite access",
      "Priority class booking",
    ],
    highlight: false,
  },
];

const TRAINERS = [
  {
    name: "Marcus Reid",
    specialty: "HIIT & Conditioning",
    bio: "Former sprinter turned coach. Builds programs that make cardio feel like a game.",
    avatar: 12,
  },
  {
    name: "Priya Nair",
    specialty: "Strength & Olympic Lifting",
    bio: "Competitive powerlifter with 8 years coaching first-timers to their first PR.",
    avatar: 47,
  },
  {
    name: "Diego Alvarez",
    specialty: "Boxing & Mobility",
    bio: "Ex-amateur boxer focused on footwork, technique, and injury-proof joints.",
    avatar: 33,
  },
  {
    name: "Sana Malik",
    specialty: "Yoga & Recovery",
    bio: "Certified yoga instructor helping members balance intensity with recovery.",
    avatar: 29,
  },
];

export default function GymFitnessStudioDemo() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-black tracking-tight">
            IRON<span className="text-[#c6ff3d]">PULSE</span>
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-300 sm:flex">
            <a href="#schedule" className="hover:text-white">Schedule</a>
            <a href="#membership" className="hover:text-white">Membership</a>
            <a href="#trainers" className="hover:text-white">Trainers</a>
          </nav>
          <a
            href="#membership"
            className="rounded-full bg-[#c6ff3d] px-5 py-2 text-sm font-bold text-black transition hover:brightness-95"
          >
            Join Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/ironpulse-hero/1600/900"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c6ff3d]">
            Downtown Strength & Conditioning
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Train harder.
            <br />
            Live stronger.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-neutral-300">
            HIIT, strength, boxing, and yoga classes led by real coaches — plus a fully
            equipped gym floor open 7 days a week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#membership"
              className="rounded-full bg-[#c6ff3d] px-6 py-3 text-sm font-bold text-black transition hover:brightness-95"
            >
              Start Free Trial
            </a>
            <a
              href="#schedule"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-[#111]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          {[
            ["1,200+", "Active Members"],
            ["4", "Expert Coaches"],
            ["30+", "Classes / Week"],
            ["9", "Years Running"],
          ].map(([stat, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-[#c6ff3d]">{stat}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight">Class Schedule</h2>
        <p className="mt-2 text-neutral-400">Drop into any class — no sign-up required for members.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCHEDULE.map((d) => (
            <div key={d.day} className="rounded-2xl border border-white/10 bg-[#111] p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#c6ff3d]">{d.day}</h3>
              <ul className="mt-4 space-y-3">
                {d.classes.map((c) => (
                  <li key={c.time + c.name} className="flex items-start justify-between gap-3 border-t border-white/5 pt-3 first:border-0 first:pt-0">
                    <div>
                      <p className="text-sm font-semibold text-white">{c.name}</p>
                      <p className="text-xs text-neutral-500">with {c.coach}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-neutral-400">{c.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="border-y border-white/10 bg-[#111] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black tracking-tight">Membership Plans</h2>
          <p className="mt-2 text-neutral-400">Cancel anytime. No hidden fees.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 ${
                  plan.highlight
                    ? "border-[#c6ff3d] bg-[#c6ff3d]/[0.06]"
                    : "border-white/10 bg-[#0a0a0a]"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#c6ff3d] px-3 py-1 text-xs font-bold text-black">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-3">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-neutral-400">{plan.period}</span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-neutral-300">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-[#c6ff3d]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full py-2.5 text-sm font-bold transition ${
                    plan.highlight
                      ? "bg-[#c6ff3d] text-black hover:brightness-95"
                      : "border border-white/25 text-white hover:bg-white/10"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight">Meet the Coaches</h2>
        <p className="mt-2 text-neutral-400">Certified. Experienced. Actually invested in your progress.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((t) => (
            <div key={t.name} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
              <div className="relative aspect-square w-full">
                <Image
                  src={`https://i.pravatar.cc/500?img=${t.avatar}`}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white">{t.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-[#c6ff3d]">
                  {t.specialty}
                </p>
                <p className="mt-2 text-sm text-neutral-400">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#111] py-16 text-center">
        <h2 className="text-3xl font-black tracking-tight">Your first class is on us.</h2>
        <p className="mx-auto mt-2 max-w-md text-neutral-400">
          No contracts, no pressure — just show up and see if IronPulse is the right fit.
        </p>
        <a
          href="#"
          className="mt-6 inline-block rounded-full bg-[#c6ff3d] px-8 py-3 text-sm font-bold text-black transition hover:brightness-95"
        >
          Claim Free Trial
        </a>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} IronPulse Fitness Studio — Template demo
      </footer>
    </div>
  );
}
