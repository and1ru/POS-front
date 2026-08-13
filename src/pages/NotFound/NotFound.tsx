import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <section className="text-center">
                <p className="text-8xl font-extrabold text-blue-600">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                    Page not found
                </h1>

                <p className="mt-3 max-w-md text-gray-600">
                    Sorry, the page you are looking for does not exist or
                    may have been moved.
                </p>

                <Link
                    to="/login"
                    className="inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Go to Login
                </Link>
            </section>
        </main>
    )
}