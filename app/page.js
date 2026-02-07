import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          CPRG 306 – Web Development 2
        </h1>

        <p className="text-slate-600 mb-6">
          This site contains weekly assignments for the CPRG 306 course.
        </p>

        <h2 className="text-xl text-blue-900 font-semibold mb-3">Assignments</h2>

        <ul className="space-y-3">
          <li>
            <Link
              href="/week-2"
              className="block p-3 rounded-md bg-violet-100 text-black hover:bg-slate-200 transition"
            >
              📘 Week 2 – Assignment
            </Link>
          </li>

          <li>
            <Link
              href="/week-3"
              className="block p-3 rounded-md bg-green-100 text-black hover:bg-slate-200 transition"
            >
              🛒 Week 3 – Shopping List
            </Link>
          </li>

          <li>
            <Link
              href="/week-4"
              className="block p-3 rounded-md bg-yellow-100 text-black hover:bg-slate-200 transition"
            >
              🛍️ Week 4 – Categorized Shopping List
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
