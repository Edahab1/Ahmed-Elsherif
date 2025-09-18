import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
        e.target,
        'YOUR_USER_ID'       // Replace with your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          toast.success('Message has been sent successfully!');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <Element
      name="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-400 to-gray-900 px-4"
    >
      {/* Toaster container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: '16px',
          },
        }}
      />

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16">
        <h2 className="mb-4 text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Get in Touch
        </h2>
        <p className="mb-6 text-center text-gray-600 sm:text-lg">
          Need details about our Business plan? Let us know.
        </p>

        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              *Your email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              *Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Leave a comment..."
              defaultValue={''}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 text-white text-sm font-semibold shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </Element>
  );
}
