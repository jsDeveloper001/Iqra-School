import { Link } from "react-router-dom";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

const Home = () => {
    const Students = 30;
    const Teachers = 7;
    const Passed = 134;
    const Staff = 2;
    return (
        <>
            <h2 className="text-black text-2xl font-bold">Home</h2>
            <section className="grid gap-14 grid-cols-1 md:grid-cols-[2fr,1fr]">

                {/* carousel/ slider */}
                <div className="mt-5">
                    <div className="carousel h-[40vh] md:h-[30vh] lg:h-[60vh]">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4">❮</a>
                                <a href="#slide2">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1">❮</a>
                                <a href="#slide3">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2">❮</a>
                                <a href="#slide4">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3">❮</a>
                                <a href="#slide1">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* all related post links for visitors */}
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-1">
                    <div>
                        <h2 className="text-black text-xl font-bold mb-3">Academic</h2>
                        <ul className="ms-7">
                            <li className="list-disc"><Link to={'/'}>Apply Now </Link></li>
                            <li className="list-disc"><Link to={'/'}>Online Payment </Link></li>
                            <li className="list-disc"><Link to={'/'}>NCTB Books </Link></li>
                            <li className="list-disc"><Link to={'/'}>Academic Calender </Link></li>
                            <li className="list-disc"><Link to={'/'}>Class Routine </Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-black text-xl font-bold mb-3">Important Connection</h2>
                        <ul className="ms-7">
                            <li className="list-disc"><Link to={'/'}>Online Class</Link></li>
                            <li className="list-disc"><Link to={'/'}>Admission Circular</Link></li>
                            <li className="list-disc"><Link to={'/'}>Tutions Fees</Link></li>
                            <li className="list-disc"><Link to={'/'}>Job Circular</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-black text-xl font-bold mb-3">Additional Connections</h2>
                        <ul className="ms-7">
                            <li className="list-disc"><Link to={'/'}>Book List & Syllebus</Link></li>
                            <li className="list-disc"><Link to={'/'}>Exam Routine</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-black text-xl font-bold mb-3">Recent Post</h2>
                        <ul className="ms-3 mt-3">
                            <li className="text-blue-700 underline">
                                <Link to={'/'}>শিক্ষক প্রশিক্ষণ</Link>
                            </li>
                            <li className="text-blue-700 underline">
                                <Link to={'/'}>মাতৃভাষা দিবস</Link>
                            </li>
                            <li className="text-blue-700 underline">
                                <Link to={'/'}>জাতীয় শিশু পুরষ্কার প্রতিযোগিতা ২০২৪</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* Short Info with logo */}
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-8 md:mt-0">
                        <div className="w-full">
                            <h2 className="text-3xl font-bold mb-3">Barnamala Viddyapith</h2>
                            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consectetur iste facere illo iusto mollitia accusamus reiciendis ratione commodi sint?</p>
                            <p className="mt-3 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consectetur iste facere illo iusto mollitia accusamus reiciendis ratione commodi sint?</p>
                            <button className='bg-[#284A70] px-4 py-1 text-white font-semibold my-5'>See More</button>
                        </div>
                        <img src="" alt="" className='w-full md:w-[250px] h-[220px] bg-slate-200' />
                    </div>
                </div>
            </section >
            <section className="grid gap-14 grid-cols-1 md:grid-cols-[2fr,1fr]">
                <div>
                    {/* school image gallery */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-5">Governing Body</h2>
                        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                            <ImageGallery url={"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"} title={"Chairman of BV"} />
                            <ImageGallery url={"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"} title={"Secretary of BV"} />
                            <ImageGallery url={"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"} title={"Principle of BV"} />
                        </div>
                    </div>

                    {/* Apply for admission */}
                    <div className="border border-blue-950 mt-12 py-5 px-8 md:px-14 lg:px-20 text-center">
                        <h2 className="text-3xl font-bold mb-3">Barnamala Viddyapith</h2>
                        <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consectetur iste facere illo iusto mollitia accusamus reiciendis ratione commodi sint?</p>
                        <button className='bg-[#284A70] px-4 py-1 text-white font-semibold my-5'>Apply Now</button>
                    </div>

                    {/* total peoples */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 items-center gap-5 lg:gap-20 justify-center">
                        <div className="text-center">
                            <h1 className="text-gray-500 text-4xl">{Students}</h1>
                            <p>STUDENT</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-gray-500 text-4xl">{Teachers}</h1>
                            <p>TEACHER</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-gray-500 text-4xl">{Passed}</h1>
                            <p>PASSED OUT</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-gray-500 text-4xl">{Staff}</h1>
                            <p>STAFF</p>
                        </div>
                    </div>

                    {/* School image gallery */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-5">Gallery</h2>
                        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                            <ImageGallery url={"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"} title={"BV - 2022"} />
                            <ImageGallery url={"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"} title={"BV - 2023"} />
                            <ImageGallery url={"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"} title={"BV - 2024"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;