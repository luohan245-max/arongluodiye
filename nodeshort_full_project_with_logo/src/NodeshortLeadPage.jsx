
import { useEffect } from "react";
import { motion } from "framer-motion";

const TELEGRAM_URL = "https://t.me/NodeShortVN";
const ZALO_URL = "https://zalo.me/g/wdweag423";
const BRAND_BG = "from-yellow-400 via-amber-400 to-orange-400";
const BRAND_TEXT = "text-amber-500";

export default function NodeshortLeadPage() {
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", "1853633115227764");
    window.fbq("init", "4246326045691268");
    window.fbq("track", "PageView");
  }, []);

  const handleJoinClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className={`relative overflow-hidden bg-gradient-to-br ${BRAND_BG} pb-24`}>
        <div className="max-w-6xl mx-auto px-4 pt-16 text-center">
          <img src="/assets/logo-gold.png" alt="NodeShort Logo" className="h-20 w-auto mx-auto mb-6 drop-shadow-xl" />

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight whitespace-pre-line"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="block">GIẢI TRÍ THÔNG MINH</span>
            <span className="block">LỢI NHUẬN BỀN VỮNG</span>
          </motion.h1>

          <motion.p
            className="mt-3 text-amber-950/90 bg-white/70 inline-block px-4 py-2 rounded-xl text-lg font-semibold shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💰 Chỉ với 500K - Nhận về hơn cả giải trí!
          </motion.p>

          <p className="mt-5 text-white/85 text-lg md:text-xl max-w-3xl mx-auto">
            Vừa xem phim miễn phí, vừa tham gia cộng đồng năng động, nhận quyền lợi hấp dẫn cùng NodeShort.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleJoinClick}
              className="px-6 py-3 rounded-2xl bg-white text-neutral-900 font-semibold hover:opacity-90 transition ring-1 ring-white/40 shadow-lg"
            >
              👉 Tham gia nhóm Telegram
            </a>

            <a
              href={ZALO_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleJoinClick}
              className="px-6 py-3 rounded-2xl bg-[#0068FF] text-white font-semibold hover:bg-[#338CFF] transition shadow-lg"
            >
              💬 Tham gia nhóm Zalo
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
