import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeft, FaPhoneSquareAlt, FaArrowRight } from "react-icons/fa";
import Featured from "@/components/featured";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Subscription() {
  return (
    <div className="flex flex-col h-screen p-6 md:p-12 lg:p-24 gap-12">
      <div className="flex flex-col gap-2  md:flex-row justify-between w-full">
        <div className="space-y-2">
          <h1 className="font-medium text-2xl md:text-4xl">Edit Profile</h1>
          <p className="text-sm md:text-base">
            View the official store profile
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Label htmlFor="consumer">View profile as consumer</Label>
          <Switch id="consumer" />
        </div>
      </div>

      <div className=" border p-6 md:p-16 space-y-6 md:space-y-16 ">
        <div className="flex w-full justify-between items-center ">
          <FaArrowLeft />
          images
          <FaArrowRight />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:w-full md:max-w-sm md:justify-between">
            <Button className="rounded-none">Write a review</Button>
            <Button className="rounded-none" variant={"outline"}>
              Share
            </Button>
            <Button className="rounded-none" variant={"outline"}>
              Favourite
            </Button>
          </div>
          <div className="hidden md:block">
            <Button variant={"link"}>View all photos</Button>
          </div>
        </div>
      </div>

      <div className="border p-8 md:p-16 space-y-16">
        <div className=" flex flex-col gap-6 md:flex-row md:justify-between">
          <div className=" flex flex-col gap-3">
            <div className="flex gap-12 items-center w-full max-w-sm justify-between text-lg">
              Store Name #Verified X
              <Button className="rounded-none" variant={"outline"}>
                Edit
              </Button>
            </div>
            description
            <div className="flex gap-1 text-[20px] text-[#FF9529]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div>
              <Button className="rounded-none" variant={"outline"}>
                Write All Reviews
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between  w-full max-w-sm gap-12 items-center">
              Business infromation
              <Button className="rounded-none" variant={"outline"}>
                Edit
              </Button>
            </div>
            <div>
              <p>www.store website.com</p>
            </div>
            <div>
              <p className="flex gap-2 items-center">
                <FaPhoneSquareAlt size={"25"} />
                1-800-976-9999{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="border p-6 md:p-8 space-y-6 ">
          <div className="flex flex-col justify-start gap-4 md:flex-row md:items-center md:justify-between">
            Quick Shop Featured items
            <div className="flex gap-4">
              <FaArrowLeft />
              <FaArrowRight />
            </div>
          </div>
          <Featured></Featured>
        </div>

        <div className="  flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className=" flex justify-between items-center text-lg font-semibold">
              Posts
              <Button className="rounded-none" variant={"outline"}>
                Edit
              </Button>
            </div>
            <ResizablePanelGroup
              direction="horizontal"
              className="min-h-[200px] max-w-sm border"
            >
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">view or photo of recent</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">caption</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            <div className="flex flex-col gap-4">
              <div className=" flex justify-between items-center text-lg font-semibold">
                Categories
                <Button className="rounded-none" variant={"outline"}>
                  Edit
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <p>Primary: Resturanat</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type of resturant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">1</SelectItem>
                      <SelectItem value="banana">2</SelectItem>
                      <SelectItem value="blueberry">3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <ul>
                  <li>Bars</li>
                  <li>Lounge</li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <div className=" flex justify-between items-center text-lg font-semibold">
                Amenities
                <Button className="rounded-none" variant={"outline"}>
                  Edit
                </Button>
              </div>

              <ul>
                <li>Wifi</li>
                <li>Lounge</li>
                <li>Full Bar</li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-col gap-4 w-full max-w-sm">
            <div className="flex justify-between items-center  text-lg font-semibold">
              Address
              <Button className="rounded-none" variant={"outline"}>
                Edit
              </Button>
            </div>
            <div>
              <p>
                123 Main St
                <br />
                Philadelphia, PA 19144
                <br />
                Center City
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center text-lg font-semibold">
                Hours
                <Button className="rounded-none" variant={"outline"}>
                  Edit
                </Button>
              </div>

              <Table>
                <TableBody className=" flex flex-col max-w-xs justify-between">
                  <TableRow className="flex justify-between">
                    <TableCell className="font-medium">Sun</TableCell>
                    <TableCell>11:00AM - 6:00PM</TableCell>
                  </TableRow>
                  <TableRow className="flex justify-between">
                    <TableCell className="font-medium">Mon</TableCell>
                    <TableCell> 11:00AM - 6:00PM</TableCell>
                  </TableRow>
                  <TableRow className="flex justify-between">
                    <TableCell className="font-medium">Tues</TableCell>
                    <TableCell>11:00AM - 6:00PM</TableCell>
                  </TableRow>
                  <TableRow className="flex justify-between">
                    <TableCell className="font-medium">Wed</TableCell>
                    <TableCell>11:00AM - 6:00PM</TableCell>
                  </TableRow>
                  <TableRow className="flex justify-between">
                    <TableCell className="font-medium">Thu</TableCell>
                    <TableCell>11:00AM - 6:00PM</TableCell>
                  </TableRow>
                  <TableRow className="flex justify-between">
                    <TableCell className="font-medium">Fri</TableCell>
                    <TableCell>11:00AM - 6:00PM</TableCell>
                  </TableRow>
                  <TableRow className="flex justify-between">
                    <TableCell className="font-medium">Sat</TableCell>
                    <TableCell>Closed</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
