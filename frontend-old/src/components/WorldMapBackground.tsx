import React from 'react';

const WorldMapBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
      >
        {/* North America */}
        <path
          d="M150,100 C200,80 250,90 300,100 C350,110 400,120 450,100 C500,80 550,90 600,100 C650,110 700,120 750,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-300"
        />
        {/* South America */}
        <path
          d="M200,200 C250,220 300,230 350,220 C400,210 450,220 500,230 C550,240 600,250 650,240"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-300"
        />
        {/* Europe */}
        <path
          d="M400,100 C450,90 500,100 550,110 C600,120 650,130 700,120 C750,110 800,100 850,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-300"
        />
        {/* Africa */}
        <path
          d="M450,150 C500,160 550,170 600,180 C650,190 700,200 750,190 C800,180 850,170 900,160"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-300"
        />
        {/* Asia */}
        <path
          d="M600,100 C650,90 700,100 750,110 C800,120 850,130 900,120 C950,110 1000,100 1050,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-300"
        />
        {/* Australia */}
        <path
          d="M800,250 C850,240 900,250 950,260 C1000,270 1050,280 1100,270"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-300"
        />
      </svg>
    </div>
  );
};

export default WorldMapBackground; 