import React from 'react';
import { Code, Coffee, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Zap, title: 'Fast Learner', description: 'Quick to adapt to new technologies' },
    { icon: Coffee, title: 'Problem Solver', description: 'Love tackling complex challenges' },
    { icon: Heart, title: 'Team Player', description: 'Collaborative and communicative' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer who recently started my professional journey in the tech industry. 
              With a strong foundation in computer science and hands-on experience gained through a 6-month internship 
              followed by 6 months of full-time work, I've developed practical skills in modern web development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              During my time at the company, I've worked on real-world projects using Spring Boot, Javascript, and other modern 
              technologies. I'm eager to continue learning, growing, and contributing to innovative projects while 
              building scalable applications that solve meaningful problems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">1 Year Experience</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Fresh Graduate</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Quick Learner</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;