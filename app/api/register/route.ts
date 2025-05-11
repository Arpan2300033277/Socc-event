import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Validate the data
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Create the user in your database
    // 4. Generate a session or token

    // For this example, we'll just simulate a successful registration
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: { id: "user_123", name, email },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
