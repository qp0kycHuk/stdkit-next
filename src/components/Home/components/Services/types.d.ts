interface IServiceItem {
  color: 'purple' | 'blue' | 'orange' | 'green'
  title: string
  description: React.ReactNode
  links?: IItemLink[]
}

interface IItemLink {
  path?: string
  name: string
}
