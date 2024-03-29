
const HeroSection = () => {
    return (
        <>
        <div class="h-screen flex items-center bg-[#357F70]">

            <div class="px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
                <div class="text-center">
                    <h1 class="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title">
                        <span class="block">2nd International Conference on Textile Science and Engineering</span>
                        {/* <span class="block pt-2">New Product Launch</span> */}
                    </h1>
                    <h2 className="mt-2 text-white">With special focus on Textile Processing, Sustainability and Circularity</h2>
                    <p class="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    23-24 May 2024, BUTEX, Dhaka, Bangladesh
                    </p>
                    <div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">

                        {/* <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> */}
                            <button class="inline-block px-6 sm:px-6 md:px-6 lg:px-12 py-2 sm:py-3 md:py-3.5 lg:py-4 
                    font-medium text-white bg-transparent border shadow-xl
                     border-[#3ba08c] rounded-full active:text-[#53532c] hover:bg-[#abb33c] hover:text-white-400 
                    focus:outline-none text-sm sm:text-base md:text-base lg:text-base "
                    onClick={() => location.replace('/registration')}>
                                Register Now
                            </button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div></>
    );
};

export default HeroSection;