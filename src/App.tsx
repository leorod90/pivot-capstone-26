import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1
          data-aos="fade-down"
          className="text-6xl font-bold text-blue-600 mb-4"
        >
          My Portfolio
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl text-gray-600 max-w-2xl"
        >
          React + Tailwind CSS + AOS scroll animations.
        </p>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2
          data-aos="fade-right"
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">Project One</h3>
            <p className="text-gray-600">
              A modern React application built with Tailwind CSS.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">Project Two</h3>
            <p className="text-gray-600">
              Responsive layouts and smooth user experiences.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">Project Three</h3>
            <p className="text-gray-600">
              Interactive components and custom animations.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            data-aos="zoom-in"
            className="text-4xl font-bold mb-8"
          >
            About Me
          </h2>

          <p
            data-aos="fade-left"
            className="text-lg text-gray-600"
          >
            I'm learning React and building projects using modern tools
            like Vite, Tailwind CSS, React Router, and AOS animations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div
          data-aos="flip-left"
          className="max-w-xl mx-auto bg-blue-600 text-white p-10 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>

          <p className="mb-6">
            Reach out if you'd like to collaborate on a project.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;