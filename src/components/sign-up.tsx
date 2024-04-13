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
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Label } from "@/components/ui/label";
  import { Input } from "@/components/ui/input";
  
  export function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Sign Up</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create an account</AlertDialogTitle>
            <AlertDialogDescription>
              Choose a Sign up Option
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-4">

          <div>
            <Label htmlFor="email"></Label>
            <Input id="email" placeholder="Sign up with email" className="text-center" readOnly />
          </div>
          <div>
            <Label htmlFor="apple"></Label>
            <Input id="apple" placeholder="Sign up with apple" className="text-center" readOnly />
          </div>
          <div>
            <Label htmlFor="facebook"></Label>
            <Input id="facebook" placeholder="Sign up with facebook" className="text-center" readOnly />
          </div>
          <div>
            <Label htmlFor="google"></Label>
            <Input id="google" placeholder="Sign up with google" className="text-center" readOnly />
          </div>
          </div>
          <div>

          <p className="text-center">or</p>
          <p className="text-sm">
            Already have a Bity View Business Account?
            <Button type="button" variant={"link"}>
              Log in
            </Button>
          </p>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  