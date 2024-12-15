import React from 'react';
import aptomaIcon from '@/public/aptoma_icon.svg';
import Image from 'next/image';

interface AptomaIconProps {
  className?: string;
  size?: number;
}

const AptomaIcon: React.FC<AptomaIconProps> = ({  size = 24 }) => (
	<Image src={aptomaIcon} alt="Aptoma icon" width={size} height={size} style={{
		borderRadius: '50%',
		overflow: 'hidden',
		width: '100%',
		height: '100%'
      }} />
  );

export default AptomaIcon;
