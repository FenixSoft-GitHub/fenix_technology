interface Props {
  className?: string;
}

export const Separator = ({ className }: Props) => {
  return <div className={`bg-slate-400 h-px my-3 dark:bg-gray-700 ${className}`} />;
};
