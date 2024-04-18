import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Subscription() {
  return (
    <div className="flex flex-col h-screen p-6 md:p-12 lg:p-24 gap-12">
      <div className="flex flex-col gap-2  md:flex-row justify-between w-full">
        <div className="space-y-2">
          <h1 className="font-medium text-2xl md:text-4xl">Subscriptions</h1>
          <p className="text-sm md:text-base">
            View details of your subscriptions
          </p>
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Your Store" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className=" border p-8 md:p-16">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3>Subscription</h3>
            <p className="text-sm md:text-base">
              View payment methods used for your subscription and ad purchases
            </p>
          </div>
          <div className="border p-6 md:p-12 space-y-6 md:space-y-12 ">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex gap-12">
                Subscription Name
                <p>$0 per month</p>
              </div>
              <div>
                <Button variant="outline">Change Plan</Button>
              </div>
            </div>

            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
            </ul>
          </div>
        </div>

        <div className="border p-4 md:p-6">
          <Button variant={"ghost"}>View all features</Button>
        </div>
      </div>

      <div className=" border p-8 md:p-16 space-y-4">
        <h3>Billed with</h3>

        <div className="border p-8 md:p-8 flex flex-col md:flex-row md:justify-between md:items-start text-base">
          Vise Primary ending in 1582
          <div className="flex gap-2 md:gap-4">
            <Button variant="link">Update</Button>
          </div>
        </div>
      </div>
      <div className="items-end">
        <Button>Cancel</Button>
      </div>
    </div>
  );
}
