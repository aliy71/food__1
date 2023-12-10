import { Article, Aside, Header, Menu } from "@/components"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="w-auto max-w-[1440px] mx-auto min-h-[100vh] bg-white-300 relative">
      <header className="bg-orange-100 rounded-b-[55%]">
        <Header />
      </header>
      <div className="container sticky top-0 z-100">
        <Menu />
      </div>
      <main className="relative">
        <div className="container">
          <div className="flex items-start gap-4 py-8">
            <Aside />
            <Article />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage