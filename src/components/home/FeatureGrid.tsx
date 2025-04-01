import { memo } from 'react';
import { features } from "@/constants/links";
import { FeatureItem } from './FeatureItem';

export const FeatureGrid = memo(() => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full max-w-[1400px] mx-auto px-4">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
});
