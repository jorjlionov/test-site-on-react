const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full bg-blue-300 p-5 shadow-lg shadow-gray-900">
        <h2 className="text-amber-950 text-2xl font-bold">News Site</h2>
        <nav>
          <ul className="flex space-x-1 ">
            <li><a href="#" className="hover:text-fuchsia-950 transition-colors duration-500 p-0.5 m-0 ">HOME</a></li>
            <li><a href="#" className="hover:text-fuchsia-950 transition-colors duration-500 p-0.5 m-0 ">POLITYC</a></li>
            <li><a href="#" className="hover:text-fuchsia-950 transition-colors duration-500 p-0.5 m-0 ">TECHNOLOGES</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
