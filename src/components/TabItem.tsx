import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.TabsTrigger
      className="relative pb-4 text-sm text-zinc-500 hover:text-violet-700 data-[state='active']:text-violet-700"
      value={value}
    >
      <span className="font-medium">{title}</span>

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
      )}
    </Tabs.TabsTrigger>
  )
}
