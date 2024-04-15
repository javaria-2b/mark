import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function Testimonial() {
  return (
    <div className=" space-y-2 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Optional</SelectLabel>
            <SelectItem value="product">Product</SelectItem>
            <SelectItem value="service">Service</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div>
        <Textarea className="" placeholder="Type your message here." />
      </div>
    </div>
  );
}

export default Testimonial;
