import Image from 'next/image';
import LogoMarquee from '../components/LogoCloud';

export default function WhyChooseUs() {

    return (
        <>
            <section className="py-10 md:py-20 relative bg-gray-50">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
                    {/* Left Text Section */}
                    <div className="text-left md:w-7/12">
                        <div className="mx-auto max-w-full mb-5 md:mb-10">
                            <h1 className="relative font-semibold max-w-max pb-2 font-display text-xl sm:text-2xl md:text-3xl text-gray-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-800 after:w-4">
                                WHY CHOOSE US
                            </h1>
                        </div>
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-snug">
                            The usual Shopify Development Agency?
                            <br />
                            <span className="text-orange-500">But no.</span>
                        </h1>
                        <p className="text-gray-600 mt-4 md:text-lg">
                            In a world full of <strong className="text-primary">competition</strong>, <br />
                            we bring your Shopify store to the <strong className="text-primary">right audience</strong>.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-0 md:w-5/12 flex justify-end">
                        <img
                            src="/hand.png"
                            alt="Hand Gesture"
                            className="w-2/3 md:w-full md:max-w-xs lg:max-w-sm xl:max-w-md relative -right-10 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"
                        />
                    </div>
                </div>
            </section>
            <section className='relative bg-gray-50'>
                <Image
                    src="/why-choose-us.svg"
                    alt="Why Choose Us"
                    width={684}
                    height={250}
                    className="relative bottom-[-50px] md:bottom-[-100px] left-1/2 transform -translate-x-1/2 z-20"
                />
            </section>
            <section className="relative bg-gray-50">
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-primary z-0" style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}></div>

                <div className="relative z-10 py-10 md:py-20 max-w-7xl mx-auto px-4">
                    <div className="space-y-10">
                        {/* First Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <img src="data:image/png;base64,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" alt="ghost-emoji"></img>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                        1. Human to Human
                                    </h2>
                                    <p className="text-gray-800 text-lg">
                                        For us, kindness is also a KPI. Results matter, but how we achieve them makes all the difference. We stay with you every step of the way, keeping you informed and involved.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Second Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                2. Less is more but more is definitely better
                            </h2>
                            <p className="text-gray-800 text-lg">
                                Simplicity is important, but sometimes comprehensive, customized strategies are what you need to stand out.
                            </p>
                        </div>

                        {/* Third Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                3. B2C, B2B or Not to be?
                            </h2>
                            <p className="text-gray-800 text-lg">
                                No matter your audience or industry, we ensure your online presence is top-notch and tailored to your needs.
                            </p>
                        </div>

                        {/* Fourth Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                4. Don’t know how to do it? We’ve got you covered
                            </h2>
                            <p className="text-gray-800 text-lg">
                                You don’t need to know the technicalities—that’s our job. Our team of experts handles everything so you can focus on your business.
                            </p>
                        </div>

                        {/* Fifth Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                5. Your Store, Your Story
                            </h2>
                            <p className="text-gray-800 text-lg">
                                Every store tells a story. We ensure yours is unique, memorable, and resonates with your audience.
                            </p>
                        </div>

                        {/* Sixth Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                6. We Build Value
                            </h2>
                            <p className="text-gray-800 text-lg">
                                Every project needs a reason to exist. We ensure clear purpose and positioning, making your store stand out for all the right reasons.
                            </p>
                        </div>

                        {/* Seventh Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                7. Effortless Growth, Guaranteed
                            </h2>
                            <p className="text-gray-800 text-lg">
                                Growth shouldn’t be a struggle. We create foundations that allow your business to scale seamlessly.
                            </p>
                        </div>

                        {/* Eighth Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                8. Stand Out Without Saying a Word
                            </h2>
                            <p className="text-gray-800 text-lg">
                                Your store’s design and presentation should captivate customers instantly. We ensure every detail is designed to impress.
                            </p>
                        </div>

                        {/* Ninth Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                9. Luck is Not an Option
                            </h2>
                            <p className="text-gray-800 text-lg">
                                We don’t leave success to chance. Instead, we focus on clear strategies that deliver consistent, lasting results.
                            </p>
                        </div>

                        {/* Tenth Card */}
                        <div className="bg-white shadow-md rounded-2xl p-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                10. Long-Term Partnerships, Not Just Transactions
                            </h2>
                            <p className="text-gray-800 text-lg">
                                We don’t just build stores; we build relationships. From start to growth, we’re with you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <LogoMarquee />
        </>
    );
}
