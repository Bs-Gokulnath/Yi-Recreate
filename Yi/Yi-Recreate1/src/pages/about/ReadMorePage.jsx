import React, { useState, useEffect } from 'react';
import image1 from './assets/images/video.png';
import image2 from './assets/images/video1.png';

const ReadMorePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const paragraphs = [
    "A chance meeting with Mr. Ashok Soota, who had just taken over as President of the CII, when we were both on our way to the CII National Council Meeting in Kolkata, had us discussing India and the potential of its youth. During our conversation, he asked me whether I would be interested in chairing the Young Business Council (YBC) of CII. I was just 36. Although it was interesting, I told him I would think about it.",
    "A little research revealed to me that CII’s YBC had a few chapters across India but was most active in South India. They met frequently to discuss business issues. While I appreciated their focus, the raison d’être didn’t appeal to me. Business issues are largely age-agnostic and were being discussed across the board in CII by the young as well as the old. After all, business issues are the same for everyone. What about the other pressing issues pertaining to the young part of society, the ones that concerned the growth and development of the youth and hence the nation, the ones that could have very well used youth and its enthusiasm towards social responsibilities?",
    "I saw in the youth involved in CII YBC a huge potential to go beyond business issues. I saw in them a myriad of leading thoughts, a zest for youth development and leadership and most importantly, a passion for nation-building. This, I felt, was the most pressing need of the hour. Remember, we are talking about 2000, when India was not seen as one of the most promising and fastest-growing economies in the world. It was on the threshold of a new millennium, where there was a need for new direction and new commitment. This new path required the strength, support, and skills of its youth..",
    "Therefore, the youth could focus on how they could contribute to their country and shape its future by going beyond business with an organisation solely dedicated to youth leadership development programs and nation-building.",
    "With this idea in mind, I met Mr. Tarun Das, who was then the Director General of CII, and Mr. Ashok Soota, and told them I would be happy to lead CII’s YBC with this new mandate. They readily agreed. And thus began an interesting journey for a new YBC and, consequently, India.",
    "I visited YBC members in Bengaluru and Chennai, where this idea of a youth-driven initiative was received very enthusiastically. Some joined hands with me to crystallise the idea and the new organization. With CII’s help, we put together a group of people from across major cities who were committed to a new millennium with a new vision and idea. They played a key role in laying the foundation of this new organization.",
    "We hired a Hyderabad-based agency, which developed the logo for the new organization, Young Indians (Yi). The simple yet powerful name instilled in everyone the strength of youth community leadership. Our first Yi meeting was held in the office of Mr. KV Kamath, who was then the MD of ICICI Bank. He not only graciously gave us office space to host the meeting but also addressed the gathering of select people, inspiring us with his encouraging words. The new organization, along with its vision and objectives, was presented to a select audience.",
    "While the new name and logo were readily accepted, there were more deliberations on the vision and objectives. They were fine-tuned to enable the youth to give their best for India’s development.",
    "With a clear vision and a new name and logo, CII’s Young Indians took its first fledgling steps towards creating a new India. The organisation helmed by youth power soon took birth as a movement for the country, led by its youth.",
    "Sanjay Reddy\nPast National Chairman Yi &\nVice Chairman, GVK"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-snug">
            Journey of CII Youth Leadership
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Insights from past leadership and national initiatives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            {[image1, image2].map((img, idx) => (
              <div key={idx} className="relative group shadow-2xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={img} alt={`Section ${idx + 1}`} className="w-full h-auto rounded-2xl" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {paragraphs.map((text, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-35px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ReadMorePage;
