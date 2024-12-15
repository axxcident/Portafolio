import React from 'react';
import Image from 'next/image';
import aptomaIcon from '@/public/aptoma_icon.svg';
import BontouchSvgIcon from '@/public/Bontouch_icon.svg';

type CompanyName = 'aptoma' | 'bontouch';

interface CompanyIconProps {
  company: CompanyName;
  className?: string;
  size?: number;
}

const iconMap = {
  aptoma: aptomaIcon,
  bontouch: BontouchSvgIcon,
} as const;

const CompanyIcon: React.FC<CompanyIconProps> = ({ company, size = 24 }) => (
  <Image
    src={iconMap[company]}
    alt={`${company} icon`}
    width={size}
    height={size}
    style={{
      borderRadius: '50%',
      overflow: 'hidden',
      width: '100%',
      height: '100%'
    }}
  />
);

export default CompanyIcon;
