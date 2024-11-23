import Menu from "./menu";

function Navbar() {
    const menulist =[
        {Text:"Home",Link:"https://github.com/jvlcode/react-basics/blob/main/src/components/Garage.js"},
        {Text:"About",Link:"#"},
        {Text:"Services",Link:"#"},
        {Text:"Contact",Link:"#"},
    ]
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <a href="#">MyLogo</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    {menulist.map((Menuinfo)=> <a key={Menuinfo.Text}><Menu Menuinfo={Menuinfo}/></a>)}
                    {/* <a href="#" class="text-gray-300 hover:text-white">Home</a>
                    <a href="#" class="text-gray-300 hover:text-white">About</a>
                    <a href="#" class="text-gray-300 hover:text-white">Services</a>
                    <a href="#" class="text-gray-300 hover:text-white">Contact</a> */}
                </div>
                <div className="md:hidden">
                    <button id="menu-toggle" className="text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;