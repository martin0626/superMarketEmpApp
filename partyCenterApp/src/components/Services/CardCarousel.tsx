import Slider from "react-slick";

export default function CardCarousel() {
  const settings = {
    customPaging: function(i: any) {
      return (
        <a>
          Page
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <section className="prices-slider-container">
      <Slider {...settings}>
        <div className="price-card">
          <div className="price-card-iamge-holder">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDtui1l97Pxeh_senc2eckSIHJg8CGCZj5Q&s"} />
          </div>
          <div className="price-card-text-holder">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aspernatur quos ratione eius commodi 
              dolore distinctio perferendis fuga veritatis nam quo dolor facere placeat corrupti quam, saepe aliquam mollitia nesciunt.
            </p>
          </div>
        </div>
        

        <div className="price-card">
          <div className="price-card-iamge-holder">
            <img src={"https://ballooncoach.com/wp-content/uploads/2014/12/Pool-Graduation-Wrap-and-both-Arcs.jpg"} />
          </div>
          <div className="price-card-text-holder">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aspernatur quos ratione eius commodi 
              dolore distinctio perferendis fuga veritatis nam quo dolor facere placeat corrupti quam, saepe aliquam mollitia nesciunt.
            </p>
          </div>
        </div>



        <div className="price-card">
          <div className="price-card-iamge-holder">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDtui1l97Pxeh_senc2eckSIHJg8CGCZj5Q&s"} />
          </div>
          <div className="price-card-text-holder">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aspernatur quos ratione eius commodi 
              dolore distinctio perferendis fuga veritatis nam quo dolor facere placeat corrupti quam, saepe aliquam mollitia nesciunt.
            </p>
          </div>
        </div>


        <div className="price-card">
          <div className="price-card-iamge-holder">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDtui1l97Pxeh_senc2eckSIHJg8CGCZj5Q&s"} />
          </div>
          <div className="price-card-text-holder">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aspernatur quos ratione eius commodi 
              dolore distinctio perferendis fuga veritatis nam quo dolor facere placeat corrupti quam, saepe aliquam mollitia nesciunt.
            </p>
          </div>
        </div>

      </Slider>
    </section>
  );
}
