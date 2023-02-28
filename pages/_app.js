import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import localFont from "next/font/local";

const nimbus = localFont({
  src: [
    {
      path: "../public/nimbus/nimbus-sans-l_bold-condensed.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/nimbus/nimbus-sans-l_bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/nimbus/nimbus-sans-l_bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/nimbus/nimbus-sans-l_regular-condensed.ttf",
      weight: "700",
      style: "regular",
    },
    {
      path: "../public/nimbus/nimbus-sans-l_regular.ttf",
      weight: "500",
      style: "regular",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={nimbus.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
