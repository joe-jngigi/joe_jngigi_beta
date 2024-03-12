
import ResponsiveNav from "./sub-components/responsive-nav";
import PagesLinks from "./sub-components/pages-links";

const Navbar = async () => {

  return (
    <nav className="z-50 font-poppins text-sm px-3 py-0.5 fixed lg:top-5 top-0 mx-auto left-1/2 transform -translate-x-1/2 w-full xl:w-[1200px] lg:shadow-lg drop-shadow-lg  dark:border-none lg:rounded-full h-[64px] lg:border  backdrop-filter backdrop-blur-lg bg-opacity-50 bg-blend-color-dodge">
      <div className="flex-between  dark:px-3 h-full rounded-full">
        {/* logo */}
        <div>
          <h1
            title="This is just text, I don't want to make a logo"
            className="logo_text text-2xl font-bold select-none"
          >
            Zephyr<span className="text-emerald-500">ONE</span>
          </h1>
        </div>

        <>
          <PagesLinks />
        </>

        {/* Menu */}
        <>
          <ResponsiveNav />
        </>
      </div>
    </nav>
  );
};

export default Navbar;
