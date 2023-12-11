type Props = {}

const Aside = (props: Props) => {
  return (
    <div className="w-[25%] sticky top-0">
      <div className="rounded-lg bg-white-900 py-5 px-3 mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2">Корзина</h3>
          <span className="px-3 rounded-lg bg-white-100 text-sm">0</span>
        </div>
        <p>Тут пока пусто :(</p>
      </div>
    </div>
  )
}

export default Aside