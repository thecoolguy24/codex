import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1200772498942345297&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fcodexbot.lol%2Fadded&scope=bot+identify">
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
