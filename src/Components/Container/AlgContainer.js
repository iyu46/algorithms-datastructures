import React, { lazy } from "react";
import { useParams } from "react-router";

const InsertionSort = lazy(() => import("../Module/algorithms/InsertionSort"));
const SelectionSort = lazy(() => import("../Module/algorithms/SelectionSort"));
const BubbleSort = lazy(() => import("../Module/algorithms/BubbleSort"));
const MergeSort = lazy(() => import("../Module/algorithms/MergeSort"));
const QuickSort = lazy(() => import("../Module/algorithms/QuickSort"));
const HeapSort = lazy(() => import("../Module/algorithms/HeapSort"));
const OrderTraversal = lazy(() => import("../Module/algorithms/OrderTraversal"));
const BinarySearch = lazy(() => import("../Module/algorithms/BinarySearch"));
const BFS = lazy(() => import("../Module/algorithms/BFS"));
const DFS = lazy(() => import("../Module/algorithms/DFS"));
const Kruskal = lazy(() => import("../Module/algorithms/Kruskal"));
const Prim = lazy(() => import("../Module/algorithms/Prim"));
const MST = lazy(() => import("../Module/algorithms/MST"));
const Dijkstra = lazy(() => import("../Module/algorithms/Dijkstra"));

const unitToComponent = {
  "insertion-sort": InsertionSort,
  "selection-sort": SelectionSort,
  "bubble-sort": BubbleSort,
  "merge-sort": MergeSort,
  "quick-sort": QuickSort,
  "heap-sort": HeapSort,
  "order-traversal": OrderTraversal,
  "binary-search": BinarySearch,
  "bfs": BFS,
  "dfs": DFS,
  "kruskal": Kruskal,
  "prim": Prim,
  "mst": MST,
  "dijkstra": Dijkstra,
};

const useGitPath = true;

const AlgContainer = () => {
  const { unit } = useParams();
  const MatchedComponent = unitToComponent[unit];
  return (
    <>
      <h2>Algorithms</h2>
      {MatchedComponent ? 
      ( <MatchedComponent id={unit} useGitPath={useGitPath}/> )
      :
      ( "unit not found" )}
    </>
  );
};

export default AlgContainer;
