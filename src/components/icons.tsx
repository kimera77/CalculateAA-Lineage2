import type { SVGProps } from "react";
import Image from "next/image";

const Gemstone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 3h12l4 6-10 13L2 9z" />
    <path d="m12 22 4-13-4-7-4 7 4 13z" />
    <path d="M2 9h20" />
  </svg>
);

export const RedStoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <Gemstone style={{ color: '#E53E3E' }} {...props} />
);

export const GreenStoneIcon = (props: React.ComponentProps<typeof Image>) => (
  <Image 
    src="https://firebasestorage.googleapis.com/v0/b/studio-8346323804-9d6c0.firebasestorage.app/o/CalculateAA%2Fverde.png?alt=media&token=ad732060-f536-4293-ae56-76ecd2499f64"
    alt="Green Seal Stone"
    width={24}
    height={24}
    {...props}
  />
);

export const BlueStoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <Gemstone style={{ color: '#4299E1' }} {...props} />
);


export const AncientAdenaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
    style={{ color: '#D4A773' }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14h8" />
    <path d="M12 8v8" />
    <path d="M9 11h6" />
  </svg>
);