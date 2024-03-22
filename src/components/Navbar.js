import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                Musi
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
            Home
              </Link>
              </li>
              <li>
              <Link className="p-color" href="https://discord.com/oauth2/authorize?client_id=1200772498942345297&permissions=8&scope=bot">
          Add
              </Link>
                  </li>
              <li>
                 <Link className="p-color" href="/premium">
              Premium
              </Link>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
