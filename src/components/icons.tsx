import type { SVGProps } from "react";
import Image from "next/image";

export const RedStoneIcon = (props: React.ComponentProps<typeof Image>) => (
    <Image 
      src="https://firebasestorage.googleapis.com/v0/b/studio-8346323804-9d6c0.firebasestorage.app/o/CalculateAA%2Frojo.png?alt=media&token=b1072113-aa7a-4ada-a0fe-a1a83ef709b7"
      alt="Red Seal Stone"
      width={24}
      height={24}
      {...props}
    />
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

export const BlueStoneIcon = (props: React.ComponentProps<typeof Image>) => (
    <Image 
      src="https://firebasestorage.googleapis.com/v0/b/studio-8346323804-9d6c0.firebasestorage.app/o/CalculateAA%2Fazul.png?alt=media&token=410fc93c-cad2-43ba-82d6-2220acdf44f2"
      alt="Blue Seal Stone"
      width={24}
      height={24}
      {...props}
    />
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
