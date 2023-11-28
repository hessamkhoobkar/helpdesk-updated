import { Heading, Button } from "@radix-ui/themes";
import Link from "next/link";

export default function TicketsPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading as="h1" size="6">
          Tickets Page
        </Heading>
        <Button className="cursor-pointer">
          <Link href="/tickets/new">New Ticket</Link>
        </Button>
      </div>
      <div>
        <p>Ticket goes here</p>
      </div>
    </div>
  );
}
