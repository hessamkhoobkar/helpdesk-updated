"use client";

import {
  Button,
  TextArea,
  TextFieldInput,
  TextFieldRoot,
} from "@radix-ui/themes";

export default function NewTicketPage() {
  return (
    <div className="space-y-3">
      <TextFieldRoot>
        <TextFieldInput placeholder="Title" />
      </TextFieldRoot>
      <TextArea placeholder="Description" />
      <Button>Create new ticket</Button>
    </div>
  );
}
