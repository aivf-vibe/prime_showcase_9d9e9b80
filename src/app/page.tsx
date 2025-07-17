export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Welcome to your Next.js application
        </p>
        <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
          🚀 Ready to build something amazing!
        </div>
      </div>
    </div>
  );
}
