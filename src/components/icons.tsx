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


  export const AncientAdenaIcon = (props: React.ComponentProps<typeof Image>) => (
    <Image 
      src="https://firebasestorage.googleapis.com/v0/b/studio-8346323804-9d6c0.firebasestorage.app/o/CalculateAA%2FAA.png?alt=media&token=680c3d2c-e097-4f23-9ea8-e5af34014c7f"
      alt="Ancient Adena"
      width={24}
      height={24}
      {...props}
    />
  );