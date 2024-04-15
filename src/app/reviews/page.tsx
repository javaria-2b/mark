import React from "react";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const Reviews = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 ">
      <div className="space-y-2 p-8 md:p-16 lg:p-24">
        <p className="text-lg">Manage Reviews</p>
        <p className="text-sm">View reviews on your business</p>
      </div>

      <div className="border m-8 md:m-16 lg:m-24 p-8 lg:p-12 space-y-4 md:space-y-6">
        <p>Reviews for Store NAme</p>

        <div className="text-sm flex-col md:flex-row items-center justify-between">
          You have #num of reviews new reviews
          <p>Loaded 12 of 98</p>
        </div>

        <div className="text-sm flex items-center justify-between">
          Sort by Newest v<p>NEW*</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-4 ">
          <div className="flex items-start gap-4">
            <Image
              src={"/biker.jpg"}
              alt="biker"
              width={120}
              height={120}
              className="aspect-square object-cover"
            />
            <div className="text-sm flex flex-col space-y-0">
              <p>Username</p>
              <p>Date</p>
              <p>Location</p>
            </div>
          </div>

          <Testimonial></Testimonial>
        </div>
        <div className="flex gap-4 justify-end">
        
          <Button className="rounded-none" variant={"outline"}>
            Respond
          </Button>
          <Button className="rounded-none" variant={"default"}>
            Acknowledge
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
