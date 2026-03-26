import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}
        C-${380 - i * 5 * position} -${189 + i * 6}
        -${312 - i * 5 * position} ${216 - i * 6}
        ${152 - i * 5 * position} ${343 - i * 6}
        C${616 - i * 5 * position} ${470 - i * 6}
        ${684 - i * 5 * position} ${875 - i * 6}
        ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(${37 + i * 2}, ${99 - i * 2}, ${235 - i * 3}, ${0.15 + i * 0.04})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70 mix-blend-screen" style={{ filter: "brightness(1.3) contrast(1.2)" }}>
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.75}
            filter="url(#glow)"
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.5, 0.85, 0.5],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
