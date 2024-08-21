import Accordian from "../ui/Accordian";
import { AiOutlineSkin } from "react-icons/ai";
import { TbMassage } from "react-icons/tb";
import { GiFingernail } from "react-icons/gi";
import { FaSpa } from "react-icons/fa6";

function Services() {
  return (
    <div className="flex flex-col gap-3">
      <Accordian label="skincare." icon={<AiOutlineSkin />}>
        <div className="flex flex-col sm:flex-row gap-2">
          <img
            src="skincare.webp"
            alt="Spa Skincare"
            className="rounded-md h-[12rem] w-auto"
          />
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum amet aut reprehenderit doloremque perferendis magni,
              fuga officiis eum ex fugiat iste accusamus assumenda natus, ipsam
              minima quaerat maiores aperiam corporis!
            </p>
            <h2 className="text-xl font-medium">skincare services.</h2>
            <ul>
              <li>facial - $75 | 50 minutes</li>
              <li>micro dermabrasion - $75 | 40 minutes</li>
              <li>face peel - $110 | 50 minutes</li>
              <li>microneedling - $250 | 90 minutes</li>
            </ul>
          </div>
        </div>
      </Accordian>
      <Accordian label="massage." icon={<TbMassage />}>
        <div className="flex flex-col sm:flex-row gap-2">
          <img
            src="massage.webp"
            alt="Massage Treatment"
            className="rounded-md h-[12rem] w-auto"
          />
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              labore adipisci provident vitae eveniet, eius, eum officia ut
              dolorum nam sit culpa sint natus minus a possimus voluptatem totam
              necessitatibus.
            </p>
            <h2 className="text-xl font-medium">massage services.</h2>
            <ul>
              <li>massage - $50 | 30 minutes</li>
              <li>couples massage - $100 | 30 minutes</li>
              <li>prenatal massage - $80 | 60 minutes</li>
              <li>hot stone massage - $135 | 90 minutes</li>
            </ul>
          </div>
        </div>
      </Accordian>
      <Accordian label="nails" icon={<GiFingernail />}>
        <div className="flex flex-col sm:flex-row gap-2">
          <img
            src="nails.webp"
            alt="Nail Treatment"
            className="rounded-md h-[12rem] w-auto"
          />
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              pariatur ut dolores. Harum omnis nostrum unde saepe beatae in,
              modi ipsum minus quaerat magnam odit corrupti a voluptate
              reprehenderit exercitationem.
            </p>
            <h2 className="text-xl font-medium">nail services.</h2>
            <ul>
              <li>manicure - $40 | 60 minutes</li>
              <li>pedicure - $55 | 60 minutes</li>
              <li>pedi peel - $90 | 120 minutes</li>
              <li>shellac gel polish - $45 | 45 minutes</li>
            </ul>
          </div>
        </div>
      </Accordian>
      <Accordian label="sauna" icon={<FaSpa />}>
        <div className="flex flex-col sm:flex-row gap-2">
          <img
            src="sauna.webp"
            alt="Sauna Room"
            className="rounded-md h-[12rem] w-auto"
          />
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              expedita placeat fugiat suscipit porro, eaque assumenda
              accusantium cupiditate! Illum magnam odio debitis corrupti cum
              doloremque ipsum a consequuntur, sed repellendus!
            </p>
            <h2 className="text-xl font-medium">sauna.</h2>
            <ul>
              <li>$50 | 90 minutes</li>
            </ul>
          </div>
        </div>
      </Accordian>
    </div>
  );
}

export default Services;
