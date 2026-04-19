import fs from "node:fs"
import path from "node:path"
import LogoLoop from "@/components/ui/logoLoop"

export default function LogoLoopSection() {
  const breePath = path.join(process.cwd(), "public", "bree")

  const logos = fs
    .readdirSync(breePath)
    .filter((file) => /\.(png|jpe?g|webp|svg)$/i.test(file))
    .map((file) => `/bree/${file}`)

  if (!logos.length) return null

  return <LogoLoop logos={logos} speed={58} />
}