import img1 from '/Events/Siemens training.jpg'
import img2 from '/Events/UK conference.jpg'
import img3 from '/Events/Abudhabi training.jpg'
import img4 from '/Events/Saudi training.jpg'
import img5 from '/Events/India training.jpg'
import img6 from '/Events/Oman training.jpg'

const Gallery = () => {
  const images = [
    {
      src: img1,
      alt: "Attending reliability engineering conference with industry experts",
    },
    {
      src: img2,
      alt: "Conducting hands-on training workshop for maintenance team",
    },
    {
      src: img3,
      alt: "Performing equipment inspection at industrial facility",
    },
    {
      src: img4,
      alt: "Collaborative team meeting discussing reliability improvements",
    },
    {
      src: img5,
      alt: "Delivering technical presentation on predictive maintenance",
    },
    {
      src: img6,
      alt: "Receiving reliability engineering certification award",
    },
  ];

  return (
    <section id="events" className="py-20 px-4 bg-gray-100">
      {" "}
      <div className="container mx-auto max-w-7xl">
        {" "}
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Events
        </h2>{" "}
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {" "}
          Events, trainings, and conferences that showcase my professional
          journey in reliability engineering{" "}
        </p>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {" "}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />{" "}
              <div className="p-4 bg-white">
                {" "}
                <p className="text-sm text-gray-600">{image.alt}</p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Gallery;
