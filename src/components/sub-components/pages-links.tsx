import Link from "next/link";

const PagesLinks = () => {
  return (
    <>
      <div className="hidden sm:flex flex-row gap-2 items-center justify-center text-sm">
        <Link
          title="Main Page / Home / Joe_J"
          className="dark:hover:bg-main-dark-bg p-2 rounded-2xl sm:flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500"
          href="/"
        >
          {/*  */}
          <span className=" tracking-wide">Home</span>
        </Link>

        <Link
          title="Typescript"
          className="dark:hover:bg-main-dark-bg p-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500"
          href="/api/auth/sign-in"
        >
          {/* <TbBrandTypescript size={20}  /> */}
          <span className=" tracking-wide">Documentation</span>
        </Link>

        <Link
          title="Well, now this one you need to login"
          className="dark:hover:bg-main-dark-bg p-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500"
          href="/projects"
        >
          {/* <GoShieldLock size = {20}/> */}
          <span className=" tracking-wide">Projects</span>
        </Link>
      </div>
    </>
  );
};

export default PagesLinks;
