import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[200px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <Link href="/"
                  className="hover:text-[#F9CE00] text-2xl">+ Inviter un proche ...</Link>
                <h1 className="mb-5 text-6xl leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  <span className="text-[#F9CE00] font-semibold">$&apos;enrichir</span> tout en <span className="font-semibold">S&apos;amusant ?</span>
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-2xl">
                  C&apos;est possible, créer un <span className="text-[#F9CE00] font-bold">Compte</span> & <span className="text-[#F9CE00] font-bold">Jouer !</span>
                </p>
                <div className="items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="">
                    <>
                      <Link
                        href="/sign-up"
                        className={`px-6 py-3 ml-5 w-[169px] h-[69px] rounded-[20px] border dark:border-white border-[#1B1B1B]`}
                      >
                        Register
                      </Link>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
