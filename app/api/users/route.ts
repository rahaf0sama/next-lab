// /users Get ==>allUsers

import { users } from "@/data/users";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(users);
}
