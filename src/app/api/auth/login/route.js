import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST (req) {
  try {
    const { username, password } = await req.json();

    const response = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });


    if (response.ok) {
      const { accessToken, refreshToken } = await response.json();
      cookies().set("accessToken", accessToken, { httpOnly: true, secure: true });
      cookies().set("refreshToken", refreshToken, { httpOnly: true, secure: true });
      return NextResponse.json({ success: true, message: "Login successful" });
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: `Internal server error | ${error}` }, { status: 500 });
  }
}