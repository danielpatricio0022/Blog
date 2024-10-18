import { type CarouselApi } from "@/components/ui/carousel";
import React, {useEffect, useState} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselT() {
  const [api] = React.useState<CarouselApi>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
    });
  }, [api]);

  useEffect(() => {
    const image = localStorage.getItem('image');
    if (image) {
      setImageUrl(image);
    }
  }, []); // 1x

  return (

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            { imageUrl ? ( <img src={imageUrl} alt="Cache" /> ) : ( <p> No image available </p> )}
          </CarouselItem>
          <CarouselItem>
            { imageUrl ? ( <img src={imageUrl} alt="Cache" /> ) : ( <p> No image available </p> )}
          </CarouselItem>
          <CarouselItem>
            { imageUrl ? ( <img src={imageUrl} alt="Cache" /> ) : ( <p> No image available </p> )}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  );
}