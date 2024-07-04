"use client"

import {useQuery} from "@tanstack/react-query";

function List() {
  debugger
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => {
        fetch("http://localhost:3000/api/pokemon").then(() => {
          return "test"
        })
    },
  });


  return (
      <div></div>
  );
}

export default List;