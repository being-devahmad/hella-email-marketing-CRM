import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import aiLogo from "../../assets/ai_camp-300x122-1.webp";
import zenat from "../../assets/zinat_technologies-300x122-1.webp";
import group22 from "../../assets/groupe22-300x122-1.webp";
import lisaLp from "../../assets/lp_media-300x122-1.webp";
import abloom from "../../assets/adbloom-300x122-1.webp";

const ConnectedTool = () => {
  const testimonials = [
    {
      quote:
        "Brevo gives us the functionality and flexibility we need to manage our marketing engagement as well as our sales pipeline while saving us $30,000 annually compared to HubSpot.",
      author: "Kevin Yen",
      position: "Head of Growth at AI Camp",
      image: aiLogo,
    },
    {
      quote:
        "For me, Brevo is ‘one-stop.’ Instead of going to each of those individual products, you have one place to go for the vast majority of your marketing and sales needs.",
      author: "John Backer",
      position: "Director of Business Development at Zinatt Technologies",
      image: zenat,
    },
    {
      quote:
        "We can better leverage the suite of CRM- and email-automation features from Brevo to deliver the greatest value for our clients. Relative to other solutions and implementations we’ve worked on previously, Brevo is second-to-none.",
      author: "Stephen Ludwig",
      position: "President and Creative Director at Group22",
      image: group22,
    },
    {
      quote:
        "Brevo Meetings makes my life SO much easier! I can feel good knowing that all I need to do is send out a booking link and, voila! Everything else will take care of itself.",
      author: "Lisa Pedersen",
      position: "Founder of Lisa Pedersen Media",
      image: lisaLp,
    },
    {
      quote:
        "Brevo’s all in one solution allows us the flexibility to try new things, to scale up or down as needed, without adding another tool or heavy investment. The best part is that we only pay for what we actually use.",
      author: "Andrew Abony",
      position: "CEO and Co-Founder of Adbloom",
      image: abloom,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
    
  };

  const handleBack = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="px-14">
      <CarouselProvider
        className="lg:w-[50vw] w-[90vw]"
        naturalSlideWidth={50}
        naturalSlideHeight={15}
        totalSlides={testimonials.length}
        currentSlide={currentSlide}
      >
        <Slider>
          {testimonials.map((testimonial, index) => (
            <Slide index={index} key={index}>
              <div >
                <p className="text-lg">{testimonial.quote}</p>
                <div className="flex justify-start items-center mt-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="object-contain w-40"
                  />
                  <div className="">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="flex items-center gap-14">
          <ButtonBack onClick={handleBack} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M0.816732 12.0747C6.11622 12.0747 10.4028 7.18927 10.4028 1.14941M0.9139 12.0747C6.21339 12.0747 10.5 16.9602 10.5 23M0.5 12.0747L24.5 12.0747"
                stroke="black"
                strokeWidth="2"
              ></path>
            </svg>
          </ButtonBack>
          <DotGroup className="flex">
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                slide={index}
                className={`w-3 h-3 mx-1.5 rounded-full border border-black ${
                  currentSlide === index ? "bg-green-900" : ""
                }`}
              />
            ))}
          </DotGroup>
          <ButtonNext onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M24.1833 12C18.8838 12 14.5972 16.8855 14.5972 22.9253M24.0861 12C18.7866 12 14.5 7.11457 14.5 1.07471M24.5 12H0.5"
                stroke="black"
                strokeWidth="2"
              ></path>
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ConnectedTool;
