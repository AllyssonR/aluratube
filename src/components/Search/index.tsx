import { StyledSearch } from "./style";
import { SearchProps } from "../../pages/index";
export function Search({ valorDoFiltro, setValorDofiltro }: SearchProps) {
  const valorDabusca = valorDoFiltro;
  const setValordaBusca = setValorDofiltro;
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setValorDofiltro(e.target.value)}
        value={valorDaBusca}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
