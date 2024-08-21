function About() {
  return (
    <div className="flex flex-col gap-5 sm:justify-center sm:items-center">
      <div className="flex flex-col justify-start sm:w-4/5 md:w-3/4 lg:w-2/3 text-pink-50 gap-3">
        <h1 className="font-extrabold text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
          about us.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          tempora incidunt nostrum voluptatem provident neque sit, fuga corporis
          minima laudantium magnam ab, nisi adipisci iusto sint. Animi ipsa cum
          nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
          incidunt nemo at praesentium voluptatem libero placeat officiis, ipsum
          aut illum quia, tempora atque eaque ratione quae iure nesciunt minima
          adipisci?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          aut dolores, incidunt repudiandae ex voluptatum facilis eum assumenda
          hic qui amet sequi? In aliquid corrupti ut atque, dicta modi
          consequuntur. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Tenetur aspernatur ad voluptate rerum repudiandae. Recusandae,
          molestias, vitae a non hic quo in quaerat repudiandae tempora modi
          nesciunt officia quia quasi. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Rerum molestias accusantium quibusdam neque
          doloremque dolorum, quia voluptatibus harum suscipit voluptatem
          blanditiis delectus illum, illo fuga. Ab laborum distinctio molestias
          ad.
        </p>
      </div>
      <div className="flex justify-start text-pink-50"></div>
      <div className="flex flex-col justify-start sm:w-4/5 md:w-3/4 lg:w-2/3 text-pink-50 gap-3">
        <h1 className="font-extrabold text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
          our staff.
        </h1>
        <div className="flex flex-col gap-3 md:gap-5 md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="employee2.webp"
              alt="Ashley Smith"
              className="rounded-full border-4 border-double border-pink-50 h-[6rem] sm:h-[7rem] md:h-[8rem] lg:h-[9rem] w-auto hover:scale-110 transition-all duration-300"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h2 className="font-semibold text-lg">Ashley Smith</h2>
              <h3>Owner</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                voluptatibus omnis vel reiciendis nihil sint sed debitis minima
                laboriosam deserunt consequatur itaque, assumenda odio facilis
                nam molestias iste sapiente. Enim?
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="employee3.webp"
              alt="Jessica Doe"
              className="rounded-full border-4 border-double border-pink-50 h-[6rem] sm:h-[7rem] md:h-[8rem] lg:h-[9rem] w-auto hover:scale-110 transition-all duration-300"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h2 className="font-semibold text-lg">Jessica Doe</h2>
              <h3>Masseuse</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
                ea distinctio odio consectetur itaque ullam doloribus aut
                repellat veritatis non facilis laudantium magni, dolorum
                suscipit voluptate similique eaque reiciendis!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="employee1.webp"
              alt="Rachel Brinkley"
              className="rounded-full border-4 border-double border-pink-50 h-[6rem] sm:h-[7rem] md:h-[8rem] lg:h-[9rem] w-auto hover:scale-110 transition-all duration-300"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h2 className="font-semibold text-lg">Rachel Brinkley</h2>
              <h3>Skincare</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                vel vero, harum sapiente ab inventore temporibus rerum dolore
                quae quo, voluptatum cum placeat quasi et. Assumenda alias
                voluptatum aspernatur voluptatibus?
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="employee4.webp"
              alt="Brittany Thatcher"
              className="rounded-full border-4 border-double border-pink-50 h-[6rem] sm:h-[7rem] md:h-[8rem] lg:h-[9rem] w-auto hover:scale-110 transition-all duration-300"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h2 className="font-semibold text-lg">Brittany Thatcher</h2>
              <h3>Nails</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores ipsa vero non aspernatur maiores culpa voluptatem saepe,
                dicta in. Ducimus temporibus minus perferendis sunt recusandae
                possimus quia id placeat fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
