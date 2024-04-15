import { Modal } from "@/components/modal";
import { AlertDialogDemo } from "@/components/sign-up";
import { Form } from "@/components/form";
import { DialogDemo } from "@/components/store";
import { CardWithForm } from "@/components/create-store";
import { Business } from "@/components/business.info";
import { Address } from "@/components/address";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8 p-24">
        <Link href="/billing">Billing</Link>
        <Link href="/account">Account</Link>
      </div>
      <div className="flex flex-col gap-4">
        <Modal></Modal>
        <AlertDialogDemo></AlertDialogDemo>
        <Form></Form>
        <DialogDemo></DialogDemo>
        <CardWithForm></CardWithForm>
        <Business></Business>
        <Address></Address>
      </div>
    </main>
  );
}
