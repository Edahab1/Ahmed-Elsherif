import { Element } from "react-scroll";
import img1 from "/Asset Reliability.png";
import img2 from "/CMRP.jpg";
import img3 from "/engineering design.jpg";

export default function Services() {
  return (
    <Element
      name="services"
      className="py-10 min-h-screen bg-gray-200 text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Services</h2>

      <div className="flex justify-center flex-wrap gap-10 px-6">
        {[
          {
            img: img1,
            title: "Reliability & Asset Management",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, incidunt.",
          },
          {
            img: img2,
            title: "CMRP Exam Preparation",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, incidunt.",
          },
          {
            img: img3,
            title: "Engineering Design & Manufacturing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, incidunt.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="w-96 h-[500px] flex flex-col bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            {/* Image container */}
            <div className="h-60 w-full overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between p-6">
              <div>
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
                <p className="mb-4 text-base text-gray-700 dark:text-gray-400">
                  {card.text}
                </p>
              </div>

              {/* Button */}
              <a
                href=""
                className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-4 h-4 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}
