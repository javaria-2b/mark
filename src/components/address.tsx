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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ChevronLeft } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function Address() {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant={"ghost"}>
            <ChevronLeft />
            Back
          </Button>
          <X />
        </div>
        <CardTitle>Business Address</CardTitle>
        <CardDescription>
          Where is your place of business located?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-[350px] items-center gap-6">
            <div className="flex items-center space-x-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="ex. 123 Main St (optional)" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="apt">Apt/Unit</Label>
              <Input id="apt" placeholder="ex. 456(optional)" />
            </div>

            <div className="flex items-center space-x-2 ">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger className="w-[350px]">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Country</SelectLabel>
                    <SelectItem value="unitedstates">United States</SelectItem>
                    <SelectItem value="russia">Russia</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="turkey">Turkey</SelectItem>
                    <SelectItem value="finland">Finland</SelectItem>
                    <SelectItem value="brazil">Brazil</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="mexico">Mexico</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="egypt">Egypt</SelectItem>
                    <SelectItem value="italy">Italy</SelectItem>
                    <SelectItem value="spain">Spain</SelectItem>
                    <SelectItem value="argentina">Argentina</SelectItem>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="southkorea">South Korea</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="southafrica">South Africa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="ex. Philadelphia" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="state">State</Label>
              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select State</SelectLabel>
                    <SelectItem value="newyork">New York</SelectItem>
                    <SelectItem value="quebec">Quebec</SelectItem>
                    <SelectItem value="moscow">Moscow</SelectItem>
                    <SelectItem value="istanbul">Istanbul</SelectItem>
                    <SelectItem value="uusimaa">Uusimaa</SelectItem>
                    <SelectItem value="saopaulo">Sao Paulo</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="newsouthwales">
                      New South Wales
                    </SelectItem>
                    <SelectItem value="guangdong">Guangdong</SelectItem>
                    <SelectItem value="bavaria">Bavaria</SelectItem>
                    <SelectItem value="jalisco">Jalisco</SelectItem>
                    <SelectItem value="iledefrance">Île-de-France</SelectItem>
                    <SelectItem value="cairo">Cairo</SelectItem>
                    <SelectItem value="lombardy">Lombardy</SelectItem>
                    <SelectItem value="catalonia">Catalonia</SelectItem>
                    <SelectItem value="buenosaires">Buenos Aires</SelectItem>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="gyeonggi">Gyeonggi</SelectItem>
                    <SelectItem value="tokyo">Tokyo</SelectItem>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="zip-code">Zip code</Label>
              <Input id="zip-code" placeholder="ex. 10231" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="display-address">
                Display address on Buty View Profile
              </Label>
              <Switch id="display-address" />
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
