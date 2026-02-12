function Header() {
  return (
    <header className="fixed top-0 left-0 h-[70px] w-screen bg-green-600 flex items-center">
      
      {/* Left section */}
      <div className="flex-1 flex items-center justify-start pl-[10px] text-white">
        <h1 className="text-[30px] font-bold font-serif">
          AgriConnect
        </h1>
      </div>

      {/* Center section */}
      <div className="flex-1 flex items-center justify-center text-white">
        <h1 className="text-[30px] font-bold font-serif">
          Disease Detect
        </h1>
      </div>

      {/* Right section */}
      <div className="flex-1 flex items-center justify-end pr-[10px]">
        <img
          src="/hamburger.png"
          alt="menu"
          className="h-[30px] w-[55px]"
        />
      </div>

    </header>
  );
}

export default Header;