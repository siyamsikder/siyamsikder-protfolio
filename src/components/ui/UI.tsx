/* Reusable UI building blocks */

export const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-px bg-cyan-500/50" />
    <p className="text-[11px] tracking-[4px] uppercase text-cyan-400 font-bold">{text}</p>
  </div>
);

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-slate-100 font-extrabold text-3xl md:text-4xl mb-12 leading-tight tracking-tight">
    {children}
  </h2>
);

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
