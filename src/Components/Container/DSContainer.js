import React, { lazy } from "react";
import { useParams } from "react-router";

//const XX = lazy(() => import("../Module/data-structures/XX"));
const Array_ = lazy(() => import("../Module/data-structures/Array"));
const LinkedList = lazy(() => import("../Module/data-structures/LinkedList"));

const unitToComponent = {
  "array": Array_,
  // "sorted-array": SortedArray,
  "linked-list": LinkedList,
  // "doubly-linked-list": DoublyLinkedList,
  // "stack": Stack,
  // "bst": BST,
  // "avl": AVL,
  // "hash-table": HashTable,
  // "b-tree": BTree,
  // "heap": Heap,
  // "disjoint": DisjointSet,
};

const useGitPath = true;

const DSContainer = () => {
  const { unit } = useParams();
  const MatchedComponent = unitToComponent[unit];
  return (
    <>
      <h2>Data Structures</h2>
      {MatchedComponent ? 
      ( <MatchedComponent id={unit} useGitPath={useGitPath}/> )
      :
      ( "unit not found" )}
    </>
  );
};

export default DSContainer;
