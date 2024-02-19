import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "sort by name(A-Z)" },
          { value: "name-desc", lable: "sort by name(Z-A)" },
          { value: "regularPrice-asc", lable: "sort by price(low first) " },
          { value: "regularPrice-desc", lable: "sort by price(high first) " },
          { value: "maxCapacity-asc", lable: "sort by capacity(low first) " },
          { value: "maxCapacity-desc", lable: "sort by capacity(high first) " },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
