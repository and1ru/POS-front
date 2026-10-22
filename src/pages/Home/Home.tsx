
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="3" width="7" height="7" rx="2" />
                <rect x="3" y="14" width="7" height="7" rx="2" />
                <rect x="14" y="14" width="7" height="7" rx="2" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Business<span className="text-blue-600">Manager</span>
            </span>
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            Sign in
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/80 via-white to-white" />
          <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -left-32 top-64 -z-10 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />

          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                Your business, under control
              </div>

              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Manage your business.
                <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Move forward.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0">
                Simplify your daily operations with one platform for
                inventory, sales, employees, and business insights.
                Everything you need, all in one place.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Get started
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  Explore features
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500 lg:justify-start">
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  Easy to use
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  Centralized management
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-200/50 to-indigo-200/40 blur-2xl" />

              <div className="relative rounded-2xl border border-gray-200/80 bg-white p-5 shadow-2xl shadow-gray-900/10 sm:p-7">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-sm text-gray-500">Overview</p>
                    <h2 className="mt-1 text-xl font-bold text-gray-900">
                      Business dashboard
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 3v18h18" />
                      <path d="m7 14 4-4 4 3 6-7" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Total sales
                    </div>
                    <p className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                      Analytics
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Track your performance
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Inventory
                    </div>
                    <p className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                      In control
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Keep stock organized
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        Business operations
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Everything connected in one place
                      </p>
                    </div>
                    <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      Overview
                    </span>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M3 7h18l-2 13H5L3 7Z" />
                          <path d="M8 7a4 4 0 0 1 8 0" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          Inventory management
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          Products, stock, and pricing
                        </p>
                      </div>
                      <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="3" y="5" width="18" height="15" rx="2" />
                          <path d="M7 15h3m4 0h3M7 10h10" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          Sales tracking
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          Reports and business insights
                        </p>
                      </div>
                      <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <circle cx="9" cy="8" r="3" />
                          <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6V20" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          Team management
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          Employees, roles, and branches
                        </p>
                      </div>
                      <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-gray-900 p-4 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      One platform. More clarity.
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Make everyday management simpler.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-xl sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Stay organized
                  </p>
                  <p className="text-xs text-gray-500">
                    All your tools in one place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-gray-100 bg-gray-50/70 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Everything you need
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Run your business with confidence
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Spend less time managing tasks and more time growing your
                business with tools designed for your everyday workflow.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="group rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 7h18l-2 13H5L3 7Z" />
                    <path d="M8 7a4 4 0 0 1 8 0M9 12v4m6-4v4" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Inventory Management
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Organize products, monitor stock levels, and manage pricing
                  across your business locations with ease.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Better organization
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </div>
              </article>

              <article className="group rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 3v18h18" />
                    <path d="m7 14 4-4 4 3 6-7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Sales & Analytics
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Review sales performance, explore business trends, and use
                  meaningful insights to make informed decisions.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  Smarter decisions
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </div>
              </article>

              <article className="group rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6V20" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Employee Management
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Manage employee information, assign roles, and keep your
                  teams and branches organized from one place.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-600">
                  Stronger teamwork
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gray-950 px-6 py-16 text-center sm:px-12">
            <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to simplify your business?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
                Bring your daily operations together and make business
                management a little easier.
              </p>
              <Link
                to="/login"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-3.5 font-semibold text-gray-950 transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Get started today
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to="/" className="text-lg font-bold tracking-tight text-gray-900">
            Business<span className="text-blue-600">Manager</span>
          </Link>
          <p className="text-center text-sm text-gray-500">
            © 2026 BusinessManager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
