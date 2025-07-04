export default function VerticalAutoScrollCarousel({ images }) {
  return (
    <div className="overflow-hidden w-full h-[500px] relative">
      <div className="flex flex-col animate-vertical-scroll">
        {[...images, ...images].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Health Image ${idx + 1}`}
            className="w-full h-[300px] object-cover my-2 rounded-xl shadow"
          />
        ))}
      </div>

      <style jsx>{`
        .animate-vertical-scroll {
          animation: vertical-scroll 40s linear infinite;
        }

        @keyframes vertical-scroll {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
