import '../../Styles/global.css'
import { GrAnnounce } from "react-icons/gr";
import { FaAngleLeft, FaAngleRight, FaClock, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Navbar from '../../Pages/Shared/Navbar/Navbar';
const Header = () => {
    const CurrentDate = new Date().toDateString();
    return (
        <section className="primary-bg">
            <section className='secondary-bg px-2'>
                <div className='flex items-center container mx-auto'>
                    <div className='text-white flex gap-1 items-center'>
                        <GrAnnounce />
                        <span >Notices</span>
                    </div>
                    <div className='bg-white text-black flex justify-between w-full ml-4 px-2 py-1'>
                        <span>শিক্ষক প্রশিক্ষণ</span>
                        <span className='flex items-center gap-0 text-lg'>
                            <button><FaAngleLeft /></button>
                            <button><FaAngleRight /></button>
                        </span>
                    </div>
                </div>
            </section>
            <section className='text-white'>
                <div className='flex items-center justify-between text-sm py-2 container mx-auto px-2'>
                    <div className='flex items-center gap-2'>
                        <FaClock className='mt-0.5' />
                        {CurrentDate}
                    </div>
                    {/* social icons */}
                    <div className='flex items-center gap-2'>
                        <a href="" className='ps-1 pe-2 py-1 bg-black'>
                            <FaFacebookF />
                        </a>
                        <a href="" className='px-2 py-1 bg-black'>
                            <FaTwitter />
                        </a>
                        <a href="" className='px-2 py-1 bg-black'>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className='border-t-2 border-red-500'>
                    <div className='container mx-auto px-2'>
                        <Navbar/>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Header;