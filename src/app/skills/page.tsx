import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "Advanced",
      description: "Semantic HTML, Accessibility, Best Practices"
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: "Advanced",
      description: "Responsive Design, Animations, Flexbox/Grid"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: "Basic",
      description: "Utility-First CSS, Custom Configurations, Responsive Design"
    },
    {
      icon: <FaReact />,
      name: "React",
      level: "Advanced",
      description: "Hooks, Context, State Management, Component Architecture"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      level: "Basic",
      description: "Server Components, App Router, API Routes, SSR/SSG"
    },
  ]

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon-wrapper">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
