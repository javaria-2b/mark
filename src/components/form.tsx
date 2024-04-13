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
  
  export function Form() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Form</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create an account</AlertDialogTitle>
            <AlertDialogDescription>
            Before starting your free trial
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-4">

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" readOnly />
          </div>

          <div className="flex justify-between">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" readOnly />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" readOnly />
          </div>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" readOnly />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" readOnly />
          </div>
          </div>
          <Button type="button" variant={"default"}>
              Complete Registration
            </Button>
          <div>

      
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
  