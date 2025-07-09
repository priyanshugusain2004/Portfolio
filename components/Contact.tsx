import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 my-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, a question, or just want to connect!
        </p>
        <form
          action="https://formspree.io/f/xanjgvbn"
          method="POST"
          className="max-w-xl mx-auto"
        >
          <div className="mb-4 text-left">
            <label className="block text-gray-300 mb-2">
              Your email:
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all mt-1"
              />
            </label>
          </div>
          <div className="mb-4 text-left">
            <label className="block text-gray-300 mb-2">
              Your message:
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all mt-1"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            Send
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-4">
          This form is powered by Formspree. I'll get back to you via email.
        </p>
      </div>
    </section>
  );
};

export default Contact;
