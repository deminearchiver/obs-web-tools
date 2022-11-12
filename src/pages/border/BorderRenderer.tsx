import React from 'react'

const BorderRenderer = ({ className, width, height, borderRadius, strokeWidth }: BorderRendererOptions) => {
  return (
    <div className="rectangle">
        <svg width="800" height="600" id="preview" className={className}>
        <rect
            x={0}
            y={0}
            width={width}
            height={height}
            rx={borderRadius}
            ry={borderRadius}
        />
        </svg>
        <div className="gradient"></div>
    </div>
  );
}

interface BorderRendererOptions {
    className?: string;
    width: number;
    height: number;
    borderRadius?: number;
    strokeWidth: number;
}

export default BorderRenderer