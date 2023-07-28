import { Slide } from "react-awesome-reveal";
const Parallaxcard = () => {
  return (
    <>
      <div className="parallax">
        
      <div  className="parallax_text">
        <Slide direction="up">
      <h1 className="aboutheadinghalwa">About Us</h1>
      </Slide>
        <Slide direction="down">
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
        </Slide>
      </div>
      </div>

    </>
  );
};

export default Parallaxcard;
