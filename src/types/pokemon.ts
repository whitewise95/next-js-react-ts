interface Pokemon {
  id: number,
  sprites: {
    front_default: string
  },
  korean_name: string,
  moves: [
    {
      move: {
        korean_name: string
      }
    }
  ],
  types: [
    {
      type: {
        korean_name: string
      }
    }
  ]
  weight: number,
  height: number,
  abilities: [
    {
      ability: {
        korean_name: string
      }
    }
  ]
}
