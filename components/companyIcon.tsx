import React from 'react';
import Image from 'next/image';
import aptomaIcon from '@/public/aptoma_icon.svg';
import bontouchSvgIcon from '@/public/Bontouch_icon.svg';
import atomic_collab from '@/public/Atomic_Collaboration.svg'

type CompanyName = 'aptoma' | 'bontouch' | 'atomic_collab';

interface CompanyIconProps {
  company: CompanyName;
  className?: string;
  size?: number;
}

const iconMap = {
  aptoma: aptomaIcon,
  bontouch: bontouchSvgIcon,
  atomic_collab: atomic_collab,
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
