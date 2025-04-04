interface Pokemon {
  name: string;
  imgSrc?: string;
  id: number;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((element) => (
        <button
          key={element.id}
          type="button"
          onClick={() => setPokemonName(element.name)}
        >
          {element.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
