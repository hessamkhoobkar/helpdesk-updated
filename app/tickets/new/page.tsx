"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
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
  const [error, setError] = useState("");

  return (
    <div>
      {error && (
        <Callout.Root color="red" role="alert" className="mb-4">
          {/* <Callout.Icon>
        <ExclamationTriangleIcon />
      </Callout.Icon> */}
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/tickets", data);
            router.push("/tickets");
          } catch (error) {
            setError("An error occurred while creating the ticket.");
          }
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
    </div>
  );
}
