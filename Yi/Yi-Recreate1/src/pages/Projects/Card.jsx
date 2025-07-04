import React from 'react';

const Card = ({ icon: Icon, title, description, extra, color = "bg-violet-500" }) => {
  return (
    <div className="relative w-full bg-white shadow-md p-6 rounded-3xl overflow-hidden space-y-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border hover:border-blue-100 group">
      {/* Icon badge - pushed slightly inward */}
      <div className={`w-14 h-14 ${color} rounded-full absolute top-4 right-4 flex items-center justify-center shadow-md group-hover:scale-105 transition`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Card content */}
      <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
      <p className="text-blue-700 leading-relaxed">{description}</p>
      {extra && <div>{extra}</div>}
    </div>
  );
};

export default Card;
