import { HydrateClient } from "~/trpc/server";
import Login from "./login/page";

export default async function Home() {

  return (
    <HydrateClient>
      <Login />
    </HydrateClient>
  );
}
