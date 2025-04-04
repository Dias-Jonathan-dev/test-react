interface Pokemon {
  name: string;
  imgSrc?: string;
  id: number;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonName: string;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList, pokemonName }: NavBarProps) {
  if (pokemonName === "pikachu") {
    alert("pika pikachu !!!");
  }

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
