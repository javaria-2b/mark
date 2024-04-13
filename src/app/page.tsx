import Image from "next/image";
import { Modal } from "@/components/modal"
import {AlertDialogDemo} from "@/components/sign-up"
import {Form} from "@/components/form"
import {DialogDemo} from '@/components/store'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
<Modal></Modal>
<AlertDialogDemo></AlertDialogDemo>
<Form></Form>
<DialogDemo></DialogDemo>
      </div>
    </main>
  );
}
