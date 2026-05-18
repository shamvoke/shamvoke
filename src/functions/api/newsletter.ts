interface Env {
  DB: D1Database
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData()
    const email = String(formData.get("email") || "").trim().toLowerCase()

    if (!email || !isValidEmail(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email." },
        { status: 400 },
      )
    }

    await context.env.DB.prepare(
      `
      INSERT OR IGNORE INTO subscribers (email, source)
      VALUES (?, ?)
      `,
    )
      .bind(email, "shamvoke.com")
      .run()

    return Response.json({
      success: true,
      message: "You're in 💙",
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      { success: false, message: "Something went wrong." },
      { status: 500 },
    )
  }
}