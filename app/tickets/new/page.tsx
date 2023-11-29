"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface TicketForm {
  title: string;
  description: string;
}

export default function NewTicketPage() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<TicketForm>();

  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/tickets", data);
        router.push("/tickets");
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMdeEditor placeholder="Description" {...field} ref={null} />
        )}
      />
      <Button>Create new ticket</Button>
    </form>
  );
}
