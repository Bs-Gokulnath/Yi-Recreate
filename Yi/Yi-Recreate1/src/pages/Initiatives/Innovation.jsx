import React from "react"
import { Sparkles, Lightbulb, Rocket } from "lucide-react"

const Innovation = () => {
  const objectives = [
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Foster Innovation",
      desc: "Creating opportunities for youth to channel creativity and problem-solving into real-world solutions.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Culture of Innovation",
      desc: "Encouraging a mindset of curiosity, experimentation, and bold thinking.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Support Ecosystem",
      desc: "Building infrastructure, mentorship, and networks to help innovative ideas thrive.",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-6">
            Yi Innovation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Turning knowledge into action — nurturing India's next generation of innovators.
          </p>
        </div>

        {/* Description Section */}
        <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl px-6 py-12 md:px-12 space-y-6">
          {/* Gradient highlights */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 -right-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-20"></div>

          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            If <strong>knowledge</strong> is the first half of development, the second is putting it to use
            to birth <strong>innovation</strong>. Yi is a strong proponent of an innovative and ingenious
            outlook toward everyday challenges. It organizes sessions and events across India
            to inspire the innovative side of entrepreneurship and leadership.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Innovation is a novel and convenient solution to a problem or an unmet need. It may be
            an idea, method, or product, with objectives ranging from commercialization to
            social betterment or advancing human potential.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            The Yi <strong>Innovation Vertical</strong> exists to create avenues for untapped talent
            and revolutionary ideas from India's youth, nurturing a future driven by creativity and impact.
          </p>
        </div>

        {/* Objectives Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {objectives.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Innovation
