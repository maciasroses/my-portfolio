
import { About, Contact, Home, Projects } from "@/components";

export default function Index() {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
