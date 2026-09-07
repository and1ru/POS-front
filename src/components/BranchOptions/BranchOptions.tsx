import { useGetBranches } from "../../customHooks/useGetBranches/useGetBranches";

// obtener todas las branches de la company
export const BranchOptions = () => {
    const { data } = useGetBranches()

  return (
    <>
        { data?.result.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}
    </>
  );
};
