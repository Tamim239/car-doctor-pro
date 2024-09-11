export default function Banner() {
  return (
   <div className="container mx-auto">
     <div className="carousel w-full h-[90vh]">
      {banner?.map((item, index) => (
        <div
          style={{
            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
              index + 1
            }.jpg)`,
          }}
          key={index}
          id={item?.id}
          className="carousel-item relative w-full bg-center bg-no-repeat bg-cover"
        >
          <div className="w-full h-full flex items-center pl-36">
            <div className="text-white space-y-3 space-x-3">
            <h1 className="text-5xl font-bold ">{item?.title}</h1>
            <p>{item?.description}</p>
            <button className="btn btn-primary ">Discover More</button>
            <button className="btn btn-primary btn-outline">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex transform justify-between bottom-12 right-16 gap-6">
            <a href={item?.prev} className="btn btn-circle text-white">
              ❮
            </a>
            <a href={item?.next} className="btn btn-circle text-white">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}

const banner = [
  {
    id: "slide1",
    title: "Interactively repurpose synergistic",
    description:
      "Interactively whiteboard prospective methods of empowerment via synergistic vortals.",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    id: "slide2",
    title: "Interactively repurpose synergistic",
    description:
      "Interactively whiteboard prospective methods of empowerment via synergistic vortals.",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    id: "slide3",
    title: "Interactively repurpose synergistic",
    description:
      "Interactively whiteboard prospective methods of empowerment via synergistic vortals.",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    id: "slide4",
    title: "Interactively repurpose synergistic",
    description:
      "Interactively whiteboard prospective methods of empowerment via synergistic vortals.",
    next: "#slide1",
    prev: "#slide3",
  },
];
