import React from "react";
import profilePic from "/Elsherif About me.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 17+ years of hands-on experience in asset management,
              mechanical maintenance, and reliability engineering, I help
              organizations enhance operational efficiency, extend asset life,
              and achieve significant cost reductions. Through the application
              of proven practices such as RCM, RCA, RAM, ACA, and reliability
              excellence, I enable industries to reduce unplanned downtime,
              eliminate chronic failures, and build more resilient,
              high-performing systems.
            </p>
            <div>
  <h4 className="border-b-4 pb-2 text-blue-700 font-semibold">
    Key Impact Areas
  </h4>
  <ul className="text-sm text-gray-700 mt-2 mb-6 list-disc list-inside">
    <li>Reduce maintenance and operational costs by up to 30%</li>
    <li>Minimize unplanned downtime and production losses</li>
    <li>Extend asset life cycles and improve ROI on capital equipment</li>
    <li>Optimize spare parts usage and inventory costs</li>
    <li>Eliminate recurring failures through root cause & criticality analysis</li>
  </ul>
</div>


            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm ">
                <h4 className="font-semibold text-blue-700">Certifications</h4>
                <p>CMRP, CRL, CAMA2, ASU-LI, BMI, TOT</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-700">Training hours</h4>
                <p className="text-sm">* 3000+ hours</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-700">Experience</h4>
                <p className="text-sm">* 17+ Years in Mechanical Maintenance & Reliability</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-700">Technical Events</h4>
                <p className="text-sm">* 16 Event</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={profilePic}
              alt="Professional headshot of a reliability engineer in industrial setting"
              className="rounded-lg shadow-xl h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;