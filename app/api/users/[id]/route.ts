import { users } from "@/data/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const user = users.find((u) => u.id == parseInt(id));
  if (!user) {
    return NextResponse.json(
      {
        message: "No User With this Id",
      },
      { status: 404 }
    );
  }
  return NextResponse.json(user);
}
