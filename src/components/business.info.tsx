import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ChevronLeft } from "lucide-react";

export function Business() {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant={"ghost"}><ChevronLeft />Back</Button>
          <X />
        </div>
        <CardTitle>Business Contact Information</CardTitle>
        <CardDescription>
          Let’s begin creating your profile. This gives visitors of our site a
          view of your online business. Let’s begin with your business contacts:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" placeholder="ex .www.mystore.com" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" placeholder="<(123) 456-789" />
            </div>
            <div className="text-base font-bold">Social Media</div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input id="instagram" placeholder="My Store" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="tiktok">Tiktok</Label>
              <Input id="tiktok" placeholder="My Store" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="Facebook">Facebook</Label>
              <Input id="facebook" placeholder="My Store" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  );
}
