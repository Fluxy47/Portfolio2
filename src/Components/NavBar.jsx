import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";

function NavBar({ color, setIsVisible }) {
  const navigate = useNavigate();
  const Home = useRef(null);
  const myref = useRef(null);
  const itemsRef = useRef([]);
  const WorkRef = useRef();
  const AboutRef = useRef();
  const ContactRef = useRef();
  const Work = useMouseMovementAnimation(WorkRef);
  const About = useMouseMovementAnimation(AboutRef);
  const Contact = useMouseMovementAnimation(ContactRef);

  const arr = [
    { name: "Work", route: "/Work", ref: Work },
    { name: "About", route: "/About", ref: About },
    { name: "Contact", route: "/Contact", ref: Contact },
  ];

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, arr.length);
  }, []);
  // const refs = Array.from({ length: arr.length }, () => useRef(null));

  // Apply the custom hook directly in the component body
  // refs.forEach((ref) => useMouseMovementAnimation(ref));
  const HomeAnimate = useMouseMovementAnimation(Home);

  const handleNavigation = (route) => {
    setIsVisible(true);
    setTimeout(() => {
      navigate(route);
    }, 1000);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  // const handleNavigation = (route) => {
  //   setIsVisible(true);
  //   setIsOpen(false);
  //   setTimeout(() => {
  //     setIsVisible(false);
  //     navigate(route);
  //   }, 5000);
  // };

  return (
    <section
      className={` flex justify-between pt-[30px] md:pt-[35px] text-[${color}]`}>
      <div ref={HomeAnimate} className="p-3">
        <h2
          onClick={() => handleNavigation("/")}
          className="ml-3 md:ml-10 tracking-wider font-bold  md:text-xl cursor-pointer">
          @CodeByDenis
        </h2>
      </div>
      <div className="md:flex mr-10 justify-evenly  gap-[2em] hidden">
        {arr.map((item, idx) => (
          <div key={idx} className="" ref={item.ref}>
            <h2
              onClick={() => handleNavigation(item.route)}
              className="text-xl font-bold tracking-wider cursor-pointer">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
      <h2 className="tracking-wider font-bold md:hidden mr-3">Menu</h2>
    </section>
  );
}

export default NavBar;
