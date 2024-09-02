export type RootStackParamsList = {
  Home: undefined,
  Profile: { userId: string }
  New: { userId: string },
  Feed: { sort: 'asc' | 'desc' } | undefined
}