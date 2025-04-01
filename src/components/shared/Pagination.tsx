import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface Props {
  totalItems: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ totalItems, page, setPage }: Props) => {
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const itemsPerPage = 8;
  const totalPages = totalItems ? Math.ceil(totalItems / itemsPerPage) : 1;
  const isLastPage = page >= totalPages;

  const startItem = (page - 1) * itemsPerPage + 1; // 1 -> 11 -> 21
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <div className="flex justify-between items-center">
      <p className="text-xs font-medium">
        Mostrando{" "}
        <span className="font-bold">
          {startItem} - {endItem}
        </span>{" "}
        de <span className="font-bold"> {totalItems}</span> productos
      </p>

      <div className="flex gap-8 items-center">
        <button
          className="w-36 flex items-center justify-between gap-1 px-6 py-2 rounded-full font-medium text-sm mt-2 bg-cyan-600 text-white hover:bg-cyan-700 active:scale-95 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 outline-2 outline-offset-2 outline-cyan-600"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          <GrFormPrevious className="text-2xl" />
          <span>Anterior</span>
        </button>

        <button
          className="w-36 flex items-center justify-between gap-1 px-6 py-2 rounded-full font-medium text-sm mt-2 bg-cyan-600 text-white hover:bg-cyan-700 active:scale-95 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 outline-2 outline-offset-2 outline-cyan-600"
          onClick={handleNextPage}
          disabled={isLastPage}
        >
          <span>Siguiente</span>
          <GrFormNext className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
