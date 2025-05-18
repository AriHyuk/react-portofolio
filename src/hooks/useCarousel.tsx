import { useMemo } from "react";
 
export default function useCarousel() {

  return useMemo(() => ({
    // dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Menampilkan 2 skill di layar medium
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Menampilkan 1 skill di layar kecil
        },
      },
    ],

  }), []);
}


