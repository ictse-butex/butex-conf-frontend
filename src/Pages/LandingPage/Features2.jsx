import React from 'react';

const Features2 = () => {
    return (
        <div className="flex justify-center max-h-full py-20 my-10 bg-base-200">
            <div className="hero-content  flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">ICTSE 2024 SPEAKERS</h1>
                    <p className="py-6">ICTSE 2024 is a gathering of <br/> 
                    Textile Engineers and Researchers Unite to Ignite Innovation. <br/>
                    Join us for dynamic discussions, groundbreaking research, <br/>
                    and unparalleled networking opportunities shaping the future of textile science and engineering.</p>
                    <div className="navbar ">
                        <button class="inline-block px-6 sm:px-6 md:px-6 lg:px-12 py-2 sm:py-3 md:py-3.5 lg:py-4 
                    font-medium text-white bg-[#357F70] border shadow-xl
                     border-[#357F70] rounded-full active:text-[#50bea8] hover:bg-transparent hover:text-[#357F70] 
                    focus:outline-none text-sm sm:text-base md:text-base lg:text-base "
                        onClick={() => location.replace('/registration')}
                        >
                            Register Now
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full ml-10">
                    <div className="mr-5 mb-5 grid-item col-start-1 col-end-1 row-start-1 row-end-1" title='Prof. Dr. Shah Alimuzzaman, Vice Chancellor, BUTEX'>
                        <img src="src/asset/speakersImage/speaker1.jpeg" className="w-32 h-32  mx-auto rounded-full shadow-2xl" alt="Prof. Dr. Shah Alimuzzaman, Vice Chancellor, BUTEX" />
                    </div>
                    <div className="mr-5 mb-5 grid-item col-start-2 col-end-2 row-start-1 row-end-2" title='Dr. Ummul Khair Fatema, Dean FTCE, BUTEX'>
                        <img src="src/asset/speakersImage/speaker2.jpeg" className="w-32 h-32 mx-auto rounded-full  shadow-2xl" alt="Dr. Ummul Khair Fatema, Dean FTCE, BUTEX" />
                    </div>
                    <div className="mr-5 mb-5 grid-item col-start-1 col-end-1 row-start-2 row-end-3" title='Prof. Dr. Michael Rauch, University of applied science Hof, department Muenchberg, Germany'>
                        <img src="src/asset/speakersImage/speaker3.png" className="w-32 h-32  mx-auto  rounded-full shadow-2xl" alt="Image 1" />
                    </div>
                    <div className="mr-5 mb-5 grid-item col-start-2 col-end-2 row-start-2 row-end-3" title='Mohammad Abbas Uddin, DAUS, DCE BUTEX'>
                        <img src="src/asset/speakersImage/speaker4.jpeg" className="w-32 h-32  mx-auto  rounded-full shadow-2xl" alt="Image 1" />
                    </div>
                    {/* <div className="grid-item col-start-1 col-end-2 row-start-2 row-end-3"><img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" className="w-32 h-32  mx-auto rounded-full shadow-2xl" alt="Image 1" /></div> */}
                    {/* <div className="grid-item col-start-1 col-end-3 row-start-3 row-end-4"><img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" className="w-32 h-32  mx-auto rounded-full shadow-2xl" alt="Image 1" /></div>
                    <div className="grid-item col-start-3 col-end-5 row-start-3 row-end-4"><img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" className="w-32 h-32  mx-auto rounded-full shadow-2xl" alt="Image 1" /></div> */}
                </div>
            </div>
        </div>



    );
};

export default Features2;