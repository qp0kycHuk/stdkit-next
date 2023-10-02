interface IServiceItem {
  name: string
  description?: string
  path?: string
}

interface IService {
  color: 'purple' | 'blue' | 'orange' | 'green'
  name: string
  description: string
  items?: IServiceItem[]
}
