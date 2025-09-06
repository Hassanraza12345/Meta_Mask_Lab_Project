import React from "react";

function Card({ title, description, benefits = [], imageUrl }) {
  return (
    <div className="w-full max-w-md bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-full h-52 bg-gray-200">
        <img
          src={imageUrl || "https://source.unsplash.com/600x400/?technology"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Benefits List */}
        {benefits.length > 0 && (
          <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
            {benefits.map((benefit, index) => (
              <li className="list-none flex items-center gap-2" key={index}>
            ✅ {benefit}
                </li>

            ))}
          </ul>
        )} 
      </div>
    </div>
  );
}

export default Card;
