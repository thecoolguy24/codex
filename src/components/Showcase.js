import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Codex</h1>
        <h2 className="showcase-header-text h-color">
          The only discord bot you'll ever need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bot with tons of commands that will fill
          your needs in your discord server.
        </p>

        <span className="p-color"></span>
        <div className="showcase-btn">
          <Link href="https://discord.com/oauth2/authorize?client_id=1200772498942345297&permissions=8&scope=bot">
            <a className="btn h-color no-decoration">Invite now</a>
          </Link>
          <Link href="https://discord.gg/eJsvNMFG">
            <a className="btn h-color no-decoration">Join the support server</a>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
