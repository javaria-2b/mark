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

export default function Component() {
  return (
    <div className="flex flex-col h-screen p-6 md:p-12 lg:p-24 gap-12">
      <div className="flex flex-col gap-2  md:flex-row justify-between w-full">
        <div className="space-y-2">
          <h1 className="font-medium text-2xl md:text-4xl">
            Business Information
          </h1>
          <p className="text-sm md:text-base">
            View important billing information regarding your business
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
            <h3>Billing Information</h3>
            <p className="text-sm md:text-base">
              View payment methods used for your subscription and ad purchases
            </p>
          </div>
          <div className="border p-6 md:p-12 space-y-6 md:space-y-12 ">
            <p className="text-xl md:text-2xl">Due on May 3,2024: $0.00</p>
            <div className="border p-6 md:p-8 flex flex-col md:flex-row md:justify-between md:items-start text-base">
              Vise Primary ending in 1582
              <div className="flex gap-2 md:gap-4">
                <Button variant="link">Edit</Button>
                <Button variant="link">Remove</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border p-6 md:p-12">
          <Button variant={"default"}>Add new payment method</Button>
        </div>
      </div>

      <div className=" border p-8 md:p-16 space-y-4">
        <h3>Bill History</h3>

        <div className="border p-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date issued</TableHead>
                <TableHead>Receipt Number</TableHead>
                <TableHead>Bill type</TableHead>
                <TableHead>Payment status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Business</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">12 May</TableCell>
                <TableCell>0001234</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>biz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">12 May</TableCell>
                <TableCell>0001234</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>biz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">12 May</TableCell>
                <TableCell>0001234</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>biz</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
