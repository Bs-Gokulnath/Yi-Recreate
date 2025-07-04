import React from "react"
import { BookOpen, Users, Globe, Sparkles,Link2  } from "lucide-react"

const Learning = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-6">
            Yi Learning
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nurturing leaders of tomorrow through meaningful learning experiences and opportunities.
          </p>
        </div>

        {/* Description Block */}
        <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl px-6 py-12 md:px-12 space-y-6 text-gray-800 leading-relaxed text-justify">
          {/* Gradient blobs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 -right-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-20"></div>

          <p>
           Yi ensures to hone the leadership skills of its members with several learning
            programs throughout the year, from interactive sessions to talks with national
            and global leaders to company and industry visits in India and overseas.
          </p>

          <p>
           One of the oldest and perhaps most important verticals in Yi, the <strong> Learning Vertical</strong> , as the name implies, 
           has traditionally served as a platform for Yi members to 
           learn from the best; through interactive sessions, company visits, workshops, seminars, and from peers in the organisation.
          </p>

          <p>Learning activities across India have included:</p>

          <ul className="grid md:grid-cols-2 gap-4 list-none">
            <li className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3 items-start">
              <Users className="w-6 h-6 text-blue-500 mt-1" />
              <span>
                <strong>Interaction with local leaders</strong> to understand city transformation efforts.
              </span>
            </li>
            <li className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3 items-start">
              <Globe className="w-6 h-6 text-purple-500 mt-1" />
              <span>
                <strong>Learning sessions with trade bodies</strong> to explore global business opportunities.
              </span>
            </li>
            <li className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3 items-start">
              <BookOpen className="w-6 h-6 text-green-500 mt-1" />
              <span>
                <strong>Learning Missions</strong> to globally benchmarked factories and companies.
              </span>
            </li>
           <li className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3 items-start">
  <Link2 className="w-6 h-6 text-indigo-500 mt-1" />
  <span>
    <strong>Peer-to-peer learning</strong> is driven by meaningful connections, mutual trust, and collaborative growth within a trusted circle.
  </span>
</li>
            <li className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3 items-start">
              <Sparkles className="w-6 h-6 text-pink-500 mt-1" />
              <span>
                <strong>Workshops and seminars</strong> for hands-on exposure and peer-led learning.
              </span>
            </li>
          </ul>

          <p>
            Yi has become a platform that attracts industry stalwarts to share their knowledge. However, learning is often limited to those present and can be transient.
          </p>

          <p className="italic text-blue-700 font-medium border-l-4 border-blue-500 pl-4">
            "Leadership is a source of competitive advantage."
          </p>

          <p>
            To address this, the Yi National Learning Team invites all members to share their learning needs by filling the form below. Together, we aim to build a stronger learning ecosystem in 2024.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUhuYr_lMwCRX6OiTXs5Oy__xBaYzZ0z9wVW-ZxNmraTclDQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition hover:scale-105"
          >
            Fill Learning Interest Form
          </a>
        </div>
      </div>
    </section>
  )
}

export default Learning
