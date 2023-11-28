"use client";

import { Button, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

export default function NewTicketPage() {
  return (
    <div className="space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMdeEditor />
      <Button>Create new ticket</Button>
    </div>
  );
}
