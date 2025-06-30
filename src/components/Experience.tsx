import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: 'Software Developer',
    company: 'Contexio',
    location: 'Ghansoli, Navi Mumbai',
    period: 'Aug 2024 – Jan 2025',
    description: 'Developed and maintained multiple inhouse and client projects using modern web technologies. Collaborated with design teams to build user-friendly interfaces.',
    achievements: [
      'Created a Python-based tool to scan Excel files and highlight data issues',
      'Integrated third-party APIs and services',
      'Improved code quality through testing and code reviews'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Contexio',
    location: 'Ghansoli, Navi Mumbai',
    period: '2024',
    description: 'Worked on internal projects, contributing to both frontend and backend modules.',
    achievements: [
      'Built various website pages using API data integration',
      'Designed HTML banners for promotional purposes'
    ]
  }
];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={20} className="text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    </div>
                    
                    <div className="text-blue-600 font-semibold mb-2">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;