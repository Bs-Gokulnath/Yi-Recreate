import React from "react";
import styled from "styled-components";
import {
  Users,
  Building2,
  Globe,
  BookOpen,
  Handshake,
  Award,
} from "lucide-react";

const learningPrograms = [
  {
    icon: <Users size={32} />,
    title: "Political & Admin Interactions",
    description:
      "Engage with political leaders to understand governance and development.",
  },
  {
    icon: <Globe size={32} />,
    title: "Trade Development",
    description: "Learn about global business expansion strategies.",
  },
  {
    icon: <Building2 size={32} />,
    title: "Learning Missions",
    description:
      "Visit industries that define innovation and excellence.",
  },
  {
    icon: <Handshake size={32} />,
    title: "Peer Learning",
    description: "Gain insights through experience sharing.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Workshops & Seminars",
    description: "Hands-on interactive learning experiences.",
  },
  {
    icon: <Award size={32} />,
    title: "Leadership Talks",
    description: "Learn from global leaders and changemakers.",
  },
];

export default function Card() {
  return (
    <Wrapper>
      <ScrollRow>
        {learningPrograms.map((program, i) => (
          <GlowCard key={i}>
            <div className="icon">{program.icon}</div>
            <div className="title">{program.title}</div>
            <div className="desc">{program.description}</div>
          </GlowCard>
        ))}
      </ScrollRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  padding: 2rem 1rem;
`;

const ScrollRow = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: scrollX 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scrollX {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const GlowCard = styled.div`
  flex: 0 0 auto;
  width: 300px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(10, 60, 255, 0.1);
  transition: transform 0.4s ease;
  position: relative;
  cursor: pointer;
  z-index: 0;

  .icon {
    margin-bottom: 1rem;
    color: #0a3cff;
  }

  .title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #111;
  }

  .desc {
    font-size: 0.95rem;
    color: #555;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:before {
    content: "";
    position: absolute;
    inset: -2px;
    z-index: -1;
    border-radius: 20px;
    background: linear-gradient(45deg, #0a3cff, #00f7ff, #0a3cff);
    background-size: 300%;
    filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
    animation: glow 3s linear infinite;
  }

  @keyframes glow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
