import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, Maximize, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReadMore = () => {
    navigate('/readmore');
  };

  return (
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Video Player */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden bg-slate-800 border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10">
          <video
            ref={videoRef}
            className="w-full aspect-video bg-slate-800"
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onLoadedMetadata={() => setCurrentTime(0)}
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={togglePlay}
                className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </button>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button onClick={togglePlay} className="hover:text-emerald-400 transition-colors">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <span className="text-sm font-medium">{formatTime(currentTime)}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 hover:text-emerald-400" />
                <Maximize className="w-5 h-5 hover:text-emerald-400" />
                <MoreHorizontal className="w-5 h-5 hover:text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Info + Toggle Content */}
      <div className="text-white space-y-8">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            125+ Years of Excellence
          </h1>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">
            For more than 125 years, CII has been engaged in shaping India's development journey...
          </p>
          <p className="text-lg">
            CII charts change by working closely with Government on policy issues...
          </p>
          <p className="text-lg">
            Extending its agenda beyond business, CII assists industry to identify and execute...
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-r from-emerald-800/40 to-emerald-900/40 rounded-2xl p-8 border border-emerald-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">GV. Sanjay Reddy</h3>
              <p className="text-emerald-400 font-medium">
                Past National Chairman TI & Vice Chairman, GVK
              </p>
            </div>
            <button
              onClick={handleReadMore}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
