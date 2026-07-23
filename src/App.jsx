import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import BusinessCard, { users } from "../components/BusinessCard";

// ─── Arrow icon ────────────────────────────────────────────────────────────
const ArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Card viewer ───────────────────────────────────────────────────────────
function CardWrapper() {
  const { id } = useParams();
  const user = users.find(
    (u) =>
      u.id === id ||
      u.slug?.toLowerCase() === id?.toLowerCase() ||
      users.indexOf(u) === parseInt(id, 10)
  );

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7fafc] px-4">
        <div className="rounded-[28px] border border-[#e5edf3] bg-white px-8 py-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <p className="mb-6 text-lg font-medium text-slate-600">
            Card not found.
          </p>
          <Link
            to="/"
            className="inline-flex rounded-full border border-[#d6e8f2] px-5 py-2.5 text-sm font-semibold text-[#2d9ecf] transition hover:border-[#2d9ecf] hover:bg-[#f1faff]"
          >
            ← Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_48%,#eef6fb_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[340px] bg-[radial-gradient(circle_at_top_right,rgba(45,158,207,0.16),transparent_34%),radial-gradient(circle_at_top_left,rgba(13,42,69,0.08),transparent_28%)]" />
      {/* <Link
        to="/"
        className="
          absolute left-4 top-4 z-20 rounded-full border border-[#dce8ef]
          bg-white/90 px-4 py-2.5 text-[13px] font-semibold text-slate-600
          shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur
          transition-all duration-200 hover:border-[#2d9ecf]/30 hover:text-[#2d9ecf]
          sm:left-6 sm:top-6
        "
      >
        ← Directory
      </Link> */}

      {/* Card */}
      <BusinessCard user={user} />
    </div>
  );
}

// ─── Directory ─────────────────────────────────────────────────────────────
function Directory() {
  return (
    <div className="min-h-screen bg-[#f6fafc] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-8">
        <div className="overflow-hidden rounded-[28px] border border-[#e3edf3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="relative flex flex-col gap-5 bg-[#0d2a45] overflow-hidden px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute -right-8 -top-8 h-[140px] w-[140px] rounded-full border-[28px] border-[rgba(45,158,207,0.14)]" />
            <div className="absolute right-[56px] -bottom-10 h-[100px] w-[100px] rounded-full border-[20px] border-[rgba(45,158,207,0.08)]" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8ecff0]">
                  Team Directory
                </p>
                <h1 className="mt-3 max-w-[12ch] text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Meet the <span className="text-[#2d9ecf]">Alpin</span> sales
                  team
                </h1>
                <p className="mt-3 max-w-[56ch] text-sm leading-6 text-white/65 sm:text-[15px]">
                  Select any profile to open a responsive digital business card
                  with working contact and website links.
                </p>
              </div>

              <div className="hidden rounded-[22px] bg-white/8 px-5 py-4 text-right backdrop-blur sm:block">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Members
                </p>
                <p className="mt-2 text-3xl font-bold text-white">
                  {users.length}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[3px] bg-gradient-to-r from-[#2d9ecf] via-[#58bee9] to-[rgba(45,158,207,0.12)]" />

          <div className="grid gap-0 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="flex items-center justify-center border-b border-[#e8eef4] bg-[#fafcff] px-6 py-8 lg:border-b-0 lg:border-r">
              <div className="flex w-full max-w-[260px] flex-col items-center justify-center gap-4 text-center">
                <img
                  src="/images/logo2.svg"
                  alt="Alpin Markets"
                  className="w-[130px] object-contain"
                />
                <div className="h-px w-full bg-[#dceaf2]" />
                <p className="text-sm font-medium leading-6 text-slate-500">
                  Premium business cards inspired by your shared design.
                </p>
              </div>
            </div>

            <div className="bg-white px-4 py-5 sm:px-6 sm:py-6">
              <div className="grid gap-4">
                {users.map((user, index) => {
                  const initials = user.firstName[0] + (user.lastName[0] || "");

                  return (
                    <Link
                      key={index}
                      to={`/card/${user.slug || user.id}`}
                      className="
                    group overflow-hidden rounded-[22px] border border-[#e7eef3]
                    bg-[#fcfeff] transition hover:border-[#cfe3ee] hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]
                  "
                    >
                      <div className="flex items-center gap-4 bg-[#0d2a45] px-4 py-4 sm:px-5">
                        <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[rgba(45,158,207,0.18)] border border-[rgba(45,158,207,0.35)] text-sm font-bold text-white">
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-[17px] font-bold leading-tight text-white">
                            {user.firstName}{" "}
                            <span className="text-[#2d9ecf]">
                              {user.lastName}
                            </span>
                          </p>
                          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                            {user.role}
                          </p>
                        </div>
                      </div>

                      <div className="h-[2px] bg-gradient-to-r from-[#2d9ecf] to-[rgba(45,158,207,0.14)]" />

                      <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-[#1e3a52]">
                            {user.email}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {user.phone}
                          </p>
                        </div>

                        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#eef8fc] px-3 py-2 text-sm font-semibold text-[#2d9ecf] transition group-hover:bg-[#2d9ecf] group-hover:text-white">
                          View card <ArrowIcon />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App root ──────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="/card/:id" element={<CardWrapper />} />
      </Routes>
    </Router>
  );
}
