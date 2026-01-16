'use client'

export default function MottoSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text animate-bounce-in">
          My Motto
        </h2>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover-lift glow-on-hover animate-slide-in-left delay-100">
            <p className="text-xl md:text-2xl italic text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              "どんな人でも手を繋げばもう友達さ！"
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-bold">
              — ビカラ（十二神將）
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover-lift glow-on-hover animate-slide-in-right delay-300">
            <p className="text-xl md:text-2xl italic text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              "No matter who you are, if we shake hands, you're already my friend!"
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-bold">
              — Vikala
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover-lift glow-on-hover animate-slide-in-left delay-500">
            <p className="text-xl md:text-2xl italic text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              "無論是什麼樣的人，只要牽起手來就是朋友！"
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-bold">
              — 畢卡拉
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
