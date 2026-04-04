export const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-px bg-cyan-500/50" />
    <p className="text-[11px] tracking-[4px] uppercase text-cyan-400 font-bold">{text}</p>
  </div>
);
