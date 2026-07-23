import React from "react";

// ─── Data ──────────────────────────────────────────────────────────────────
export const users = [
  {
    id: "0",
    slug: "huzaifa",
    firstName: "HUZAIFA",
    lastName: "NASIR",
    role: "Sales Manager",
    phone: "+971 56 470 3647",
    email: "huzaifa@alpinmarkets.com",
    website: "www.alpinmarkets.com",
    address: "Empire Heights Tower B, Business Bay, Dubai, UAE.",
  },
  {
    id: "1",
    slug: "raja",
    firstName: "RAJA SHAHAB",
    lastName: "NADEEM",
    role: "Sales Director",
    phone: "+971 56 847 1634",
    email: "s.raja@alpinmarkets.com",
    website: "www.alpinmarkets.com",
    address: "Empire Heights Tower B, Business Bay, Dubai, UAE.",
  },
  {
    id: "2",
    slug: "ashim",
    firstName: "ASHIM RAJUMON",
    lastName: "RAWUTHER",
    role: "Operations Manager",
    phone: "+971 56 273 2251",
    email: "ashim@alpinmarkets.com",
    website: "www.alpinmarkets.com",
    address: "Empire Heights Tower B, Business Bay, Dubai, UAE.",
  },

  {
    id: "3",
    slug: "atul",
    firstName: "ATUL",
    lastName: "MADAAN",
    role: "Chief Dealing Officer",
    phone: "+971 52 307 6233",
    email: "a.madaan@alpinmarkets.com",
    website: "www.alpinmarkets.com",
    address: "Empire Heights Tower B, Business Bay, Dubai, UAE.",
  },
];


// ─── Icons ─────────────────────────────────────────────────────────────────
const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

const baseIcon = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2d9ecf",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PhoneIcon = () => (
  <svg {...baseIcon}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" />
  </svg>
);

const EmailIcon = () => (
  <svg {...baseIcon}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const PinIcon = () => (
  <svg {...baseIcon}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GlobeIcon = () => (
  <svg {...baseIcon}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
);

const normalizeWebsite = (website) =>
  website.startsWith("http") ? website : `https://${website}`;

const toPhoneHref = (phone) => `tel:${phone.replace(/\s+/g, "")}`;

// ─── InfoRow ───────────────────────────────────────────────────────────────
const InfoRow = ({ icon, label, text, href }) => (
  <div className="flex items-start gap-3">
    {/* Icon pill */}
    <div className="w-[30px] h-[30px] rounded-lg bg-[#eef6fb] flex items-center justify-center shrink-0">
      {icon}
    </div>
    {/* Text */}
    <div className="min-w-0 flex flex-col justify-center">
      <span className="text-[9.5px] font-semibold tracking-[1px] uppercase text-slate-400 leading-none mb-[3px]">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="break-words text-[12.5px] font-medium leading-snug text-[#1e3a52] transition hover:text-[#2d9ecf]"
        >
          {text}
        </a>
      ) : (
        <span className="break-words text-[12.5px] font-medium text-[#1e3a52] leading-snug">
          {text}
        </span>
      )}
    </div>
  </div>
);

// ─── BusinessCard ──────────────────────────────────────────────────────────
const BusinessCard = ({ user }) => (
  <div className="flex justify-center items-center w-full min-h-screen p-5 bg-[#f0f4f8]">
    <div
      className="
        w-full max-w-[620px] bg-white rounded-[20px] overflow-hidden flex flex-col
        shadow-[0_0_0_1px_rgba(13,42,69,0.07),0_4px_6px_rgba(13,42,69,0.04),0_20px_40px_rgba(13,42,69,0.10)]
      "
    >
      {/* ── Header ── */}
      <div className="relative pl-3 bg-[#0d2a45]   py-[22px] flex items-center gap-[18px] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-8 -top-8 w-[140px] h-[140px] rounded-full border-[28px] border-[rgba(45,158,207,0.15)]" />
        <div className="absolute right-[60px] -bottom-10 w-[100px] h-[100px] rounded-full border-[20px] border-[rgba(45,158,207,0.08)]" />

        {/* Avatar */}
        <div className="relative z-10 w-[54px] h-[54px] rounded-full bg-[rgba(45,158,207,0.2)] border-2 border-[rgba(45,158,207,0.45)] flex items-center justify-center shrink-0">
          <PersonIcon />
        </div>

        {/* Name / role */}
        <div className="relative z-10 ">
          <p className="text-[17px] font-bold text-white tracking-[0.3px] leading-tight">
            {user.firstName}{" "}
            <span className="text-[#2d9ecf]">{user.lastName}</span>
          </p>
          <p className="text-[10.5px] text-white/50 font-medium tracking-[1.5px] uppercase mt-1">
            {user.role}
          </p>
        </div>
      </div>

      {/* ── Cyan gradient bar ── */}
      <div className="h-[3px] bg-gradient-to-r from-[#2d9ecf] to-[rgba(45,158,207,0.15)]" />

      {/* ── Body ── */}
      <div className="flex flex-col sm:flex-row min-h-[200px]">
        {/* Logo panel */}
        <div className="flex flex-col items-center justify-center px-6 py-7 gap-1.5 bg-[#fafcff] border-b sm:border-b-0 sm:border-r border-[#e8eef4]">
          <img
            src="/images/logo2.svg"
            alt="Alpin Markets"
            className="w-[110px] h-auto object-contain"
          />
        </div>

        {/* Info panel */}
        <div className="flex-1 flex flex-col justify-center gap-3.5 px-7 py-6">
          <InfoRow
            icon={<PhoneIcon />}
            label="Phone"
            text={user.phone}
            href={toPhoneHref(user.phone)}
          />
          <InfoRow
            icon={<EmailIcon />}
            label="Email"
            text={user.email}
            href={`mailto:${user.email}`}
          />
          <InfoRow
            icon={<GlobeIcon />}
            label="Website"
            text={user.website}
            href={normalizeWebsite(user.website)}
          />
          <InfoRow icon={<PinIcon />} label="Address" text={user.address} />
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-[#e8eef4] bg-[#fafcff] px-7 py-3 flex items-center justify-between">
        <a
          href={normalizeWebsite(user.website)}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] font-semibold text-[#2d9ecf] tracking-[0.3px] transition hover:text-[#0d2a45]"
        >
          {user.website}
        </a>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2d9ecf] opacity-50" />
          <span className="text-[10px] text-slate-400 font-medium tracking-wide">
            ALPIN MARKETS
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default BusinessCard;
