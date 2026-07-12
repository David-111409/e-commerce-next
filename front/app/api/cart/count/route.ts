import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { privateApi } from "@/lib/axios";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({
        count: 0,
      });
    }

    const response = await privateApi.get(
      `/carts?filters[clerkId][$eq]=${userId}&populate=*`
    );

    const cart = response.data.data[0];

    const count = cart?.cart_items?.length || 0;

    return NextResponse.json({
      count,
    });
  } catch (error: any) {
    console.log("ERROR:", error.response?.data || error.message);

    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      }
    );
  }
}
