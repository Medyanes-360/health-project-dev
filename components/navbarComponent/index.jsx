import Link from "next/link";

const NavbarComponent = (props) => {
  const navbarData = props.navbarData;

  return (
    <div className="  flex align-middle justify-between  ">
      <div className="">
        {navbarData.routes.map((route) => {
          return (
            <Link className="m-1" href={route.url} key={route.id}>
              {route.title}
            </Link>
          );
        })}
      </div>
      <div className=" ">
        <span className="">{navbarData.info.phone}</span>
        <select className="ml-5">
          <option value="">English</option>
          <option value="">Turkish</option>
          <option value="">Spanish</option>
          <option value="">French</option>
        </select>
      </div>
    </div>
  );
};
export default NavbarComponent;
