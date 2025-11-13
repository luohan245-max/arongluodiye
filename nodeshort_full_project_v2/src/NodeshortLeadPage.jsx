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
      <header
        className={`relative overflow-hidden bg-gradient-to-br ${BRAND_BG} pb-24`}
      >
        <div className="max-w-6xl mx-auto px-4 pt-16 text-center">
          <img
            src="/assets/logo-gold.png"
            alt="NodeShort Logo"
            className="h-20 w-auto mx-auto mb-6 drop-shadow-xl"
          />

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
            Vừa xem phim miễn phí, vừa tham gia cộng đồng năng động, nhận quyền
            lợi hấp dẫn cùng NodeShort.
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
              className="px-6 py-3 rounded-2xl bg-[#0068FF] text-white font-semibold hover:bg-[#338FF] transition shadow-lg"
            >
              💬 Tham gia nhóm Zalo
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tại sao nên chọn NodeShort
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              t: "Xem phim miễn phí",
              d: "Không cần mua Xu, nhận miễn phí mỗi ngày, càng xem càng vui!",
            },
            {
              t: "Tương tác cộng đồng",
              d: "Nền tảng sôi động, người dùng thật, kết nối thật.",
            },
            {
              t: "Vừa chơi vừa nhận quyền lợi",
              d: "Xem phim, điểm danh nhận Xu, đổi sang Kim cương và rút thưởng.",
            },
            {
              t: "Phúc lợi liên tục",
              d: "Mỗi tháng đều có quà tặng và sự kiện đặc biệt.",
            },
            {
              t: "Hoạt động offline",
              d: "Gặp gỡ fan phim, tham gia quay phim ngoài đời, vui hơn bao giờ hết!",
            },
          ].map((i, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-6"
            >
              <h3 className={`font-semibold ${BRAND_TEXT}`}>{i.t}</h3>
              <p className="text-sm mt-2 text-neutral-300">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Các cấp độ hội viên
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              icon: "🟡",
              t: "Hội viên Xu",
              d: "Trải nghiệm miễn phí, vui vẻ khởi đầu.",
            },
            {
              icon: "💎",
              t: "Hội viên Kim cương",
              d: "Quà tặng độc quyền, đặc quyền sự kiện.",
            },
            {
              icon: "🌟",
              t: "Hội viên VIP",
              d: "Xem toàn bộ phim, hưởng quyền lợi cao cấp.",
            },
            {
              icon: "🏅",
              t: "Hội viên Huy hiệu",
              d: "Đối tác danh dự, nhận quyền lợi & vinh dự!",
            },
          ].map((i, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-6 text-center"
            >
              <div className="text-3xl mb-2">{i.icon}</div>
              <h3 className={`font-semibold ${BRAND_TEXT}`}>{i.t}</h3>
              <p className="text-sm mt-1 text-neutral-300">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-20 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-8"
          animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Ví dụ minh họa quyền lợi
        </motion.h2>
        <p className="text-sm text-neutral-400 mb-6">(Chỉ mang tính tham khảo)</p>
        <div className="bg-neutral-900/70 ring-1 ring-white/10 rounded-3xl p-6">
          <motion.table
            className="w-full text-base md:text-lg text-neutral-300"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <thead>
              <tr className="text-amber-500 text-left border-b border-white/10">
                <th className="py-3">Mức tham gia</th>
                <th className="py-3">Ví dụ quyền lợi/ngày</th>
                <th className="py-3">Khoảng ước tính/tháng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20 USD (~500K VND)</td>
                <td>≈ 0.2 USD/ngày</td>
                <td>≈ 6 USD (~158.000 VND)</td>
              </tr>
              <tr>
                <td>100 USD (~2.640.000 VND)</td>
                <td>≈ 1 USD/ngày</td>
                <td>≈ 30 USD (~792.000 VND)</td>
              </tr>
              <tr>
                <td>1.000 USD (~26.400.000 VND)</td>
                <td>≈ 10 USD/ngày</td>
                <td>≈ 300 USD (~7.920.000 VND)</td>
              </tr>
            </tbody>
          </motion.table>
          <p className="mt-4 text-xs text-neutral-400">
            * Đây chỉ là ví dụ minh họa theo các chương trình trước – không cam kết lợi nhuận,
            có thể thay đổi theo từng giai đoạn và điều kiện thị trường.
          </p>
        </div>
      </section>

      <footer className="text-center text-xs text-neutral-400 mt-16 pb-10">
        <p>
          © {new Date().getFullYear()} NodeShort Community. Nội dung phục vụ mục đích cộng đồng & giải trí.
        </p>
        <p className="mt-2">
          Các ví dụ quyền lợi chỉ mang tính minh hoạ – không cam kết lợi nhuận. Vui lòng tự cân nhắc trước khi tham gia.
        </p>
      </footer>
    </div>
  );
}
