import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>["className"];
  width: number;
  height: number;
  onMouseEnter?: MouseEventHandler<HTMLImageElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLImageElement> | undefined;
}

export const ProductImage = ({ src, alt, className, width, height, onMouseEnter, onMouseLeave }: Props) => {
  const newSrc = src
    ? src.startsWith("http")
      ? src
      : `/products/${src}`
    : "/imgs/placeholder.jpg";

  return (
    <Image
      src={newSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};
