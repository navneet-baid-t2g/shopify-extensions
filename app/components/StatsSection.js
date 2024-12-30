import Image from "next/image";

const StatsSection = () => {
    const stats = [
        { value: "5.7B+", label: "Pageviews" },
        { value: "1.8B+", label: "Monthly Requests" },
        { value: "20K+", label: "Reviews" },
        { value: "70M+", label: "Daily Visits" },
    ];

    return (
        <section className="relative py-16 bg-gray-50">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/bg-dot.png"
                    alt="Background pattern"
                    width={1920}
                    height={633}
                    objectFit="cover"
                    className="bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-primary text-primary">
                        Driving Impact
                    </span>
                    <h2 className="text-3xl font-semibold md:text-4xl xl:text-5xl leading-tight">We supercharge business and customer growth effortlessly.
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm rounded-lg p-10 text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-300"
                        >
                            <p className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</p>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
