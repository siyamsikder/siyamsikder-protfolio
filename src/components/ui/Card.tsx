export const Card = ({
  children,
  className = "",
  noPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => (
  <div
    className={`bg-gray-900/60 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5 group ${noPadding ? "" : "p-8"} ${className}`}
  >
    {children}
  </div>
);
