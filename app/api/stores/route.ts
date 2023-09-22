import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;
    if (!userId) {
      return new NextResponse("Unauthorization", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    console.log("userId:", userId);
    console.log("name:", name);
    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });
    console.log(store);
    return NextResponse.json(store);
  } catch (error) {
    console.log("Wrong with store", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
