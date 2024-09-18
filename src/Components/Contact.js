const Contact = () => {
    return (
      <section id="contact" className="mt-30 w-full relative select-none pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20">
        <div className="section-container flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
          {/* Contact Header */}
          <div className="flex flex-col contact-wrapper mb-10">
            <div className="flex flex-col">
              <p className="uppercase tracking-widest text-gray-light-1">
                CONTACT
              </p>
              <h1 className="text-6xl mt-4 font-medium text-purple-600 text-gradient w-fit">
                Contact
              </h1>
            </div>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-4 mb-2">
              Get In Touch.
            </h2>
          </div>
  
          {/* Form Section */}
          <form className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem]">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple-600 bg-transparent rounded-[0.6rem] transition-all duration-200"
                placeholder="Name"
              />
            </div>
  
            <div className="relative mt-8">
              <input
                type="email"
                id="email"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple-600 bg-transparent rounded-[0.6rem] transition-all duration-200"
                placeholder="Email"
              />
            </div>
  
            <div className="relative mt-8">
              <textarea
                id="message"
                className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple-600 bg-transparent rounded-[0.6rem] transition-all duration-200"
                placeholder="Message"
              />
            </div>
          </form>
  
          {/* Submit Button */}
          <div className="mt-9 mx-auto">
            <button className="relative px-6 py-3 bg-purple-600 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all">
              Send
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  