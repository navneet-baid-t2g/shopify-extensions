import { FaBuilding, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function HelpPage() {

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-primary text-primary">
            How can we help you?
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl xl:text-5xl leading-tight">Contact Us</h2>
          <p className="">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
        </div>
      </div>
      <div className="max-w-7xl m-auto flex flex-col md:flex-row justify-center items-start p-8">
        {/* Form Section */}
        <div className="w-full md:w-8/12 bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium ">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium ">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium ">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Id"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium ">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                />
              </div>

              {/* Full Row - Message */}
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium ">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Leave a comment..."
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-4/12 mt-8 md:mt-0 md:ml-8 bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Company Information</h2>
          <div className="space-y-8">
            {/* Company Information */}
            <div className="text-center group">
              <div className="rounded-xl bg-gray-200 p-3 w-max relative text-center mx-auto mb-4 transition duration-300">
                <FaBuilding className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition duration-100" />
              </div>
              <p className="font-medium  transition duration-300">Shopify Extensions</p>
              <p className="text-gray-600  transition duration-300">Lorem ipsum dolor sit amet</p>
            </div>


            {/* Email Information */}
            <div className="text-center group">
              {/* Email Information */}
              <div className="rounded-xl bg-gray-200 p-3 w-max relative text-center mx-auto mb-4">
                <FaEnvelope className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition duration-100" />
              </div>
              <p className="font-medium">Email:</p>
              <a
                href="mailto:info@shopifyextensions.com"
                className="text-primary hover:text-orange-500 hover:underline underline-offset-4 font-medium"
              >
                info@shopifyextensions.com
              </a>
            </div>

            {/* Call Information */}
            <div className="text-center group">
              <div className="rounded-xl bg-gray-200 p-3 w-max relative text-center mx-auto mb-4">
                <FaPhoneAlt className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition duration-100" />
              </div>
              <p className="font-medium">Call us:</p>
              <p className="text-gray-600">
                Call us to speak to a member of our team. We are always happy to help.
              </p>
              <a
                href="tel:+16467865060"
                className="text-primary hover:text-orange-500 hover:underline underline-offset-4 font-medium"
              >
                +1 (646) 786-5060
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
