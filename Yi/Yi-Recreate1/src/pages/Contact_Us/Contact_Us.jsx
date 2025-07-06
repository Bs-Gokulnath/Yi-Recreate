  // import React, { useState, useEffect } from "react"
  // import { MapPin, Mail, Phone, MessageCircle, Clock, Globe, Sparkles } from "lucide-react"

  // // ✅ Custom Card Component
  // const Card = ({ children, className, style }) => {
  //   return (
  //     <div className={`rounded-xl bg-white shadow-md ${className}`} style={style}>
  //       {children}
  //     </div>
  //   )
  // }

  // const CardContent = ({ children, className }) => {
  //   return (
  //     <div className={`p-4 ${className}`}>
  //       {children}
  //     </div>
  //   )
  // }

  // export default function ContactPage() {
  //   const [scrollY, setScrollY] = useState(0)
  //   const [isVisible, setIsVisible] = useState(false)

  //   useEffect(() => {
  //     const handleScroll = () => setScrollY(window.scrollY)
  //     window.addEventListener("scroll", handleScroll)

  //     setTimeout(() => setIsVisible(true), 100)

  //     return () => window.removeEventListener("scroll", handleScroll)
  //   }, [])

  //   const contactInfo = [
  //     {
  //       icon: MapPin,
  //       title: "Address",
  //       content: "249-F, Udyog Vihar Phase IV,\nSector 18 Gurgaon – 122 015",
  //       color: "from-orange-500 to-orange-600",
  //       bgColor: "from-orange-50 to-orange-100/50",
  //     },
  //     {
  //       icon: Mail,
  //       title: "Email",
  //       content: "yi.national@cii.in",
  //       color: "from-gray-600 to-gray-700",
  //       bgColor: "from-gray-50 to-gray-100/50",
  //     },
  //     {
  //       icon: Phone,
  //       title: "Contact",
  //       content: "Tel: +91 124 4014060-67\nFax: +91 124 4014080",
  //       color: "from-green-500 to-green-600",
  //       bgColor: "from-green-50 to-green-100/50",
  //     },
  //   ]

  //   return (
  //     <div className="min-h-screen bg-white overflow-hidden">
  //       {/* Parallax Background Elements */}
  //       <div className="fixed inset-0 pointer-events-none">
  //         {/* Saffron elements */}
  //         <div
  //           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-orange-300/15 rounded-full blur-3xl"
  //           style={{ transform: `translateY(${scrollY * 0.1}px)` }}
  //         />
  //         <div
  //           className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/15 to-orange-500/10 rounded-lg rotate-45 blur-2xl"
  //           style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${45 + scrollY * 0.1}deg)` }}
  //         />

  //         {/* Green elements */}
  //         <div
  //           className="absolute bottom-40 left-1/4 w-64 h-64 bg-gradient-to-br from-green-200/20 to-green-300/15 rounded-full blur-2xl"
  //           style={{ transform: `translateY(${scrollY * -0.1}px)` }}
  //         />
  //         <div
  //           className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-green-500/15 rounded-full"
  //           style={{ transform: `translateY(${scrollY * 0.2}px)` }}
  //         />

  //         {/* Subtle white accent elements */}
  //         <div
  //           className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-gray-100/30 to-gray-200/20 rounded-full blur-xl"
  //           style={{ transform: `translateY(${scrollY * -0.05}px)` }}
  //         />
  //       </div>

  //       {/* Hero Section */}
  //       <section className="relative py-20 bg-gradient-to-br from-white via-orange-50/30 to-green-50/30">
  //         <div className="container mx-auto px-4">
  //           <div
  //             className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
  //             style={{ transform: `translateY(${scrollY * 0.05}px)` }}
  //           >
  //             {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl mb-8">
  //               <MessageCircle className="w-10 h-10 text-white" />
  //             </div> */}

  //             <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight">
  //               CONTACT
  //               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
  //                 US
  //               </span>
  //             </h1>

  //             <div className="flex items-center justify-center space-x-3 text-orange-600 text-xl font-medium mb-8">
  //               <Sparkles className="w-6 h-6" />
  //               <span>Get in touch with Young Indians</span>
  //             </div>

  //             <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto"></div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Contact Cards */}
  //       <section className="relative py-32">
  //         <div className="container mx-auto px-4">
  //           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
  //             {contactInfo.map((info, index) => {
  //               const Icon = info.icon
  //               return (
  //                 <Card
  //                   key={index}
  //                   className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br ${info.bgColor} hover:-translate-y-4`}
  //                   style={{
  //                     transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
  //                     animationDelay: `${index * 200}ms`,
  //                   }}
  //                 >
  //                   <CardContent className="p-10 text-center">
  //                     <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
  //                       <Icon className="w-10 h-10 text-white" />
  //                     </div>
  //                     <h3 className="text-2xl font-bold text-gray-800 mb-4">{info.title}</h3>
  //                     <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">{info.content}</p>
  //                   </CardContent>
  //                 </Card>
  //               )
  //             })}
  //           </div>

  //           {/* Additional Info Cards */}
  //           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  //             <div
  //               className="flex items-center space-x-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
  //               style={{ transform: `translateY(${scrollY * 0.03}px)` }}
  //             >
  //               <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
  //                 <Clock className="w-8 h-8 text-white" />
  //               </div>
  //               <div>
  //                 <div className="text-xl font-bold text-gray-800 mb-2">Office Hours</div>
  //                 <div className="text-gray-600 text-lg">Monday - Friday: 9:00 AM - 6:00 PM</div>
  //               </div>
  //             </div>

  //             <div
  //               className="flex items-center space-x-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
  //               style={{ transform: `translateY(${scrollY * 0.04}px)` }}
  //             >
  //               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
  //                 <Globe className="w-8 h-8 text-white" />
  //               </div>
  //               <div>
  //                 <div className="text-xl font-bold text-gray-800 mb-2">Nationwide Presence</div>
  //                 <div className="text-gray-600 text-lg">Chapters across India</div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Map Section */}
  //       <section className="relative py-32 bg-gradient-to-br from-green-50/30 to-white ">
  //         <div className="container mx-auto px-4  ">
  //           <div className="text-center mb-16">
  //             <h2 className="text-5xl font-bold text-gray-800 mb-6">
  //               Find Us
  //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
  //                 {" "}Nationwide
  //               </span>
  //             </h2>
  //             <p className="text-xl text-gray-600">Young Indians chapters across India</p>
  //             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto mt-6"></div>
  //           </div>

  //           <div
  //             className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto mb-20"
  //             style={{ transform: `translateY(${scrollY * 0.02}px)` }}
  //           >
  //             <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
  //               <div className="text-center">
  //                 <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
  //                   <MapPin className="w-12 h-12 text-white" />
  //                 </div>
  //                 <h3 className="text-3xl font-bold text-gray-800 mb-4">Interactive Map</h3>
  //                 <p className="text-xl text-gray-600">Discover Young Indians chapters near you</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Subtle Background Pattern */}
  //       <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
  //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />
  //       </div>
  //     </div>
  //   )
  // }

  
  import React, { useState, useEffect } from "react"
import { MapPin, Mail, Phone, Sparkles } from "lucide-react"

// ✅ Custom Card Component
const Card = ({ children, className, style }) => {
  return (
    <div className={`rounded-xl bg-white shadow-md ${className}`} style={style}>
      {children}
    </div>
  )
}

const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  )
}

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    setTimeout(() => setIsVisible(true), 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "249-F, Udyog Vihar Phase IV,\nSector 18 Gurgaon – 122 015",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100/50",
    },
    {
      icon: Mail,
      title: "Email",
      content: "yi.national@cii.in",
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100/50",
    },
    {
      icon: Phone,
      title: "Contact",
      content: "Tel: +91 124 4014060-67\nFax: +91 124 4014080",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100/50",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Saffron elements */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-orange-300/15 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/15 to-orange-500/10 rounded-lg rotate-45 blur-2xl"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${45 + scrollY * 0.1}deg)` }}
        />

        {/* Green elements */}
        <div
          className="absolute bottom-40 left-1/4 w-64 h-64 bg-gradient-to-br from-green-200/20 to-green-300/15 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div
          className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-green-500/15 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />

        {/* Subtle white accent elements */}
        <div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-gray-100/30 to-gray-200/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
      </div>

      {/* Contact Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Heading */}
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight pt[100px]">
                CONTACT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                  US
                </span>
              </h1>

              <div className="flex items-center space-x-3 text-orange-600 text-xl font-medium mb-8">
                <Sparkles className="w-6 h-6" />
                <span>Get in touch with Young Indians</span>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
            </div>

            {/* Right Side - Contact Cards */}
            <div className="grid gap-8 mt-20"> {/* Added margin top to push cards down */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card
                    key={index}
                    className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br ${info.bgColor} hover:-translate-y-4 max-w-xs mx-auto`}
                    style={{
                      transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <CardContent className="p-6 text-center"> {/* Reduced padding */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-7 h-7 text-white" /> {/* Made icon smaller */}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3> {/* Made text smaller */}
                      <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">{info.content}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Find Us
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                {" "}Nationwide
              </span>
            </h2>
            <p className="text-xl text-gray-600">Young Indians chapters across India</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto mb-20"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Interactive Map</h3>
                <p className="text-xl text-gray-600">Discover Young Indians chapters near you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>
    </div>
  )
}
