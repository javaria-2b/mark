import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Component() {
  return (
    <div className="flex flex-col h-screen p-24 gap-12">
      <div className="flex flex-row justify-between bg-red-200 w-full">
        <div className="space-y-2">
          <h1 className="font-medium text-4xl">Business Account Information</h1>
          <p>View general information about your business</p>
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

      <div className=" border p-16 space-y-12">
        <div className="flex items-start justify-between">
          <h3>General Information</h3>
          <div className="flex gap-6">
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="rounded-none" variant="outline">
                    Created on May 10, 2024
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogDescription>
                      This was created on May 10, 2024.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="rounded-none" variant="outline">
                    Current Plan
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Free Plan</AlertDialogTitle>
                    <AlertDialogDescription>
                      You are currenlty using our Free Plan!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Upgrade</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="firstname">First name:</Label>
            <Input type="firstname" id="firstname" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="lastname">Last name</Label>
            <Input type="lastname" id="email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Input type="role" id="email" />
          </div>
          <div className="flex">
          <Button variant={"outline"}>Cancel</Button>

          <Button variant={"default"}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
