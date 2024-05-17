import Countdown from 'react-countdown';
import { Link, NavLink } from 'react-router-dom';
import RegistrationCountdown from '../../components/RegistrationCountdown';

const NavBar = () => {
    return (
        <div className=" bg-[#D7E8E1]">

            <div className="flex justify-center ">

                <div className="navbar justify-center mt-5">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52">
                        <li><Link to="/" className='text-[#357F70] font-medium'>HOME</Link></li>
                        <li><Link to="/callforpapers" className='text-[#357F70] font-medium'>CALL FOR PAPERS</Link></li>
                        <li><Link to="/speakers" className='text-[#357F70] font-medium'>SPEAKERS</Link></li>
                        {/* <li><Link to="/registration" className='text-[#357F70] font-medium'>REGISTRATION</Link></li> */}
                        <li><Link to="/importantdates" className='text-[#357F70] font-medium'>IMPORTANT DATES</Link></li>
                        <li><Link to="/proceedings" className='text-[#357F70] font-medium'>PROCEEDINGS</Link></li>
                        <li><Link to="/Committees" className='text-[#357F70] font-medium'>COMMITTEES</Link></li>
                        <li><Link to="/importantlinks" className='text-[#357F70] font-medium'>IMPORTANT LINKS</Link></li>
                        <li><Link to="/contactus" className='text-[#357F70] font-medium'>CONTACT US</Link></li>
                        <li><Link to="/aboutconference" className='text-[#357F70] font-medium'>ABOUT CONFERENCE</Link></li>
                        </ul>
                    </div>
                    <img src="https://www.butex.edu.bd/wp-content/uploads/2024/01/ConfLogo2024.png" className=" w-52" />                    
                </div>

                <div className="navbar flex-col justify-center mt-5 ">
                    <button class="inline-block px-6 sm:px-6 md:px-6 lg:px-12 py-2 sm:py-3 md:py-3.5 lg:py-4 
                    font-medium text-white bg-[#357F70] border shadow-xl
                     border-[#357F70] rounded-full active:text-[#50bea8] hover:bg-transparent hover:text-[#357F70] 
                    focus:outline-none text-sm sm:text-base md:text-base lg:text-base "
                    onClick={() => location.replace('/registration')}>
                        Register Now<br/>
                    </button>
                    <sub className=' m-2 flex-col'>
                        <RegistrationCountdown/><br/>
                        <span className='pt-5'>remaining</span>
                    </sub>

                </div>
            </div>

            <div className='navbar justify-center '>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className='text-[#357F70] font-medium'>HOME</Link></li>
                        <li><Link to="/callforpapers" className='text-[#357F70] font-medium'>CALL FOR PAPERS</Link></li>
                        <li><Link to="/speakers" className='text-[#357F70] font-medium'>SPEAKERS</Link></li>
                        {/* <li><Link to="/registration" className='text-[#357F70] font-medium'>REGISTRATION</Link></li> */}
                        <li><Link to="/importantdates" className='text-[#357F70] font-medium'>IMPORTANT DATES</Link></li>
                        <li><Link to="/proceedings" className='text-[#357F70] font-medium'>PROCEEDINGS</Link></li>
                        <li><Link to="/Committees" className='text-[#357F70] font-medium'>COMMITTEES</Link></li>
                        <li><Link to="/importantlinks" className='text-[#357F70] font-medium'>IMPORTANT LINKS</Link></li>
                        <li><Link to="/contactus" className='text-[#357F70] font-medium'>CONTACT US</Link></li>
                        <li><Link to="/aboutconference" className='text-[#357F70] font-medium'>ABOUT CONFERENCE</Link></li>
                        {/* <li className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="">About the conference
                                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;