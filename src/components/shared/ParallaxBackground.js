import React from 'react';
import styled from 'styled-components';
import useParallax from '../../hooks/useParallax';

const ParallaxContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
`;

const FloatingShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.color || '#FF6B00'};
  opacity: ${props => props.opacity || 0.1};
  transition: transform 0.1s ease-out;
`;

const ParallaxBackground = ({ offset = 0 }) => {
  const scrollY = useParallax();
  
  const shapes = [
    { size: 100, top: '10%', left: '5%', speed: 0.2 },
    { size: 60, top: '30%', right: '10%', speed: 0.4 },
    { size: 80, top: '60%', left: '15%', speed: 0.3 },
    { size: 40, top: '80%', right: '20%', speed: 0.5 },
    { size: 120, top: '20%', right: '5%', speed: 0.15 },
  ];

  return (
    <ParallaxContainer>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            transform: `translateY(${(scrollY - offset) * shape.speed}px)`,
            opacity: 0.05 + (index * 0.02)
          }}
        />
      ))}
    </ParallaxContainer>
  );
};

export default ParallaxBackground;