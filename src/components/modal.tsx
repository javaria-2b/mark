import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Log In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>to continue to Bity View.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" readOnly />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" readOnly />
          </div>
          <p className="text-center">or</p>
          <div className="items-center flex justify-between text-sm gap-2">
            <p className="flex items-center border border-b rounded-lg py-2 px-4">
              <Image
                src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                alt="Google"
                width={"20"}
                height={"20"}
              />
              Google
            </p>
            <p className="flex items-center border border-b rounded-lg py-2 px-4">
              <Image
                src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                alt="Google"
                width={"20"}
                height={"20"}
              />
              Google
            </p>
            <p className="flex items-center border border-b rounded-lg py-2 px-4">
              <Image
                src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                alt="Google"
                width={"20"}
                height={"20"}
              />
              Google
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm">
            Need to BIty View Business?
            <Button type="button" variant={"link"}>
              Register Now
            </Button>
          </p>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
