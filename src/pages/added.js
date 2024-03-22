import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Thanks for adding me | codex</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Thank you for adding codex to your server
            </label>
          </header>
          <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.gg/QQn2FGC9">
            Join the support server
          </Link>
        </button>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://top.gg/">
            Vote for codex!
          </Link>
        </button>
          
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
