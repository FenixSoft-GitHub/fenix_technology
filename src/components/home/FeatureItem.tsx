import { memo } from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureItem = memo(({ icon, title, description }: FeatureItemProps) => (
  <div className=" bg-slate-200 border border-slate-200 shadow-md flex items-center gap-6 p-4 transition-all duration-300 rounded-lg hover:bg-slate-100 hover:border-slate-200">
    <div className="text-slate-600">{icon}</div>
    <div className="space-y-1">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
));

FeatureItem.displayName = 'FeatureItem';