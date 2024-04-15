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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Store</CardTitle>
        <CardDescription>Build your online store</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-10">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Create store name</Label>
              <Input id="name" placeholder="My Store" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="framework">Select Store Type</Label>
              <Tabs className="space-y-6">
                <TabsList>
                  <TabsTrigger value="product">Product</TabsTrigger>
                  <TabsTrigger value="service">Service</TabsTrigger>
                </TabsList>
                <TabsContent value="service" className="text-sm">
                  Pick a primary category and 2 additional categories of your
                  store: products and services have different categories
                  <div className="flex flex-wrap gap-3 justify-center mt-6">
                    <Button variant="outline" className="rounded-full">
                      Cleaning
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Rental
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Cosmetics
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Daycare
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Massage
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  );
}
