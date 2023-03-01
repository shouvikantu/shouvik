import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-6 items-center grid snap-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-3 max-w-3xl p-4 text-lg text-gray-500">
            I am an international student from Bangladesh currently studying at Willamette university. I am double majoring in Computer Science and Mathematics. I'm currently based in Salem, Oregon. I have a passion for developing high-quality software that is both easy to use and maintainable.
            </p>
            <div>
            <div className="bg-gray-100 p-4">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-200 rounded-lg p-2 text-center">
                <h3 className="text-md font-medium mb-2">Volleyball</h3>
            </div>
            <div className="bg-gray-200 rounded-lg p-2 text-center">
                <h3 className="text-md font-medium mb-2">Guitar</h3>
            </div>
            <div className="bg-gray-200 rounded-lg p-2 text-center">
                <h3 className="text-md font-medium mb-2">Soccer</h3>
            </div>
            <div className="bg-gray-200 rounded-lg p-2 text-center">
                <h3 className="text-md font-medium mb-2">Singing</h3>
            </div>
            <div className="bg-gray-200 rounded-lg p-2 text-center">
                <h3 className="text-md font-medium mb-2">Movies</h3>
            </div>
            <div className="bg-gray-200 rounded-lg p-2 text-center">
                <h3 className="text-md font-medium mb-2">Board games</h3>
            </div>
            <div className="bg-gray-200 rounded-lg p-2 text-center">
                <h3 className="text-md font-medium mb-2">Math puzzle</h3>
            </div>
    </div>
  </div>
</div>

            </div>
          </div>
          <div className="mt-8 sm:mt-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 p-4">Education</h3>
            <div className="relative pl-4">
              <div className="border-l-2 border-gray-500 absolute top-0 bottom-0 left-2 animate-bounce"></div>
              <div className="ml-4 p-4">
                <h4 className="text-lg font-bold text-gray-900">Bachelor's Degree</h4>
                <p className="text-base text-gray-500">
                  Willamette University, 2022-2026
                </p>
                <div className="relative pl-4">
                  <div className=" animate-pulse border-l-2 border-gray-500 absolute top-0 bottom-0 left-2"></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Computer Science & Mathematics
                    </h4>
                    <p className="text-base text-gray-500">
                      For interests in the field of Machine Learning and Artificial <br /> Intelligence, double majoring in these two fields.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-4 p-4">
                <h4 className="text-lg font-bold text-gray-900">
                  High School
                </h4>
                <p className="text-base text-gray-500">
                  McMinnville High School, 2021-2022
                </p>
                <div className="relative pl-4">
                  <div className="animate-pulse border-l-2 border-gray-500 absolute top-0 bottom-0 left-2"></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Academic
                    </h4>
                    <p className="text-base text-gray-500">
                    High School exchange on a full scholarship funded <br /> by the US department of state
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
