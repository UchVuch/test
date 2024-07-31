const ruUnits: Record<string, string> = {
  'gram': 'г'
}

export default function (unit: string): string {
  return ruUnits[unit]
}