import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Jest', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;