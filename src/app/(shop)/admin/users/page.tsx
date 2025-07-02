import { Title } from "@/components";
import { Suspense } from "react";
import { UsersTable } from "./ui/UsersTable";
import { getPaginaterUsers } from "@/actions";
import { redirect } from "next/navigation";

export default async function UsersPage() {
  const { ok, users = [] } = await getPaginaterUsers();

  if (!ok) {
    redirect("/auth/login")
  }

  return (
    <Suspense>
      <Title title="Mantenimiento de usuarios" />
      <div className="mb-10">
        <UsersTable user={users} />
      </div>
    </Suspense>
  );
}
