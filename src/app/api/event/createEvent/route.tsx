import { getServerSession } from "next-auth/next"
import { handler } from "../../auth/[...nextauth]/route"
import { NextResponse } from "next/server";


export default async (request: Request) => {
    const session = await getServerSession(handler)

    if (session) {
        return NextResponse.json({
            content:
                "This is protected content. You can access this content because you are signed in.",
        })
    } else {
        return NextResponse.json({
            error: "You must be signed in to view the protected content on this page.",
        })
    }
}