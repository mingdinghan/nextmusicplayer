import { request } from "http"
import { NextResponse } from "next/server"

const signedInPages = ['/', '/playlist', '/library']

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    if (!token) {
      // deprecated: see https://nextjs.org/docs/messages/middleware-relative-urls
      // return NextResponse.redirect('/signin')
      return NextResponse.rewrite(new URL('/signin', req.url))
    }
  }
}
