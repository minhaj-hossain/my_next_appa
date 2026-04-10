import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
            <div className="text-center max-w-xl">

                {/* Big 404 */}
                <h1 className="text-[120px] md:text-[160px] font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 animate-pulse">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-slate-400 mt-4 text-lg">
                    The page you are looking for doesn’t exist or has been moved.
                    Don’t worry, you can head back to the homepage.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="mt-8 px-8 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 font-semibold">
                        ⬅ Return Home
                    </button>
                </Link>

                {/* Decorative glow */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-linear-to-r from-cyan-400 to-blue-500"></div>
            </div>
        </div>
    )
}