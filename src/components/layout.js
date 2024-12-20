import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav>
        <div>
          <a href="/">
            <img
              src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png"
              width={40}
            />
          </a>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/example">Example</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
