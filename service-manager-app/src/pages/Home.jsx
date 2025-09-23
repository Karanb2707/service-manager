export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-black px-6 h-screen">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-4">
        Welcome to Service Manager
      </h1>
      <div className="w-16 h-0.5 bg-cyan-400 mb-6"></div>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Your one-stop portal for <span className="text-cyan-400">wellness</span> & <span className="text-cyan-400">services</span>
      </p>
    </div>
  )
}
