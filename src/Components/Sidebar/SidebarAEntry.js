import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore} from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  top: {
    paddingLeft: theme.spacing(0),
  },
  list: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
  },
  listItems: {
    position: 'relative',
    marginTop: '0',
    marginBottom: '0',
  },
  removeLinkStyling: {
    '&:link, &:visited, &:hover': {
        color: 'inherit',
        textDecoration: 'none',
    },
    '&:active': {
        color: 'inherit',
        fontWeight: 'bold',
        textDecoration: 'none',
    },
  },
}));

export default function SidebarAEntry() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.list}>
      <ListItem button onClick={handleClick}>
          <ListItemText primary="Algorithms" />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to={'/algorithms/insertion-sort'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
                <ListItemText primary="Insertion Sort" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/selection-sort'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Selection Sort" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/bubble-sort'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Bubble Sort" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/merge-sort'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Merge Sort" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/quick-sort'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Quick Sort" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/heap-sort'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Heap Sort" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/binary-search'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Binary Search" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/order-traversal'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="X-Order Traversal (Trees)" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/bfs'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Breadth-First Search" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/dfs'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Depth-First Search" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/kruskal'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Kruskal's" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/prim'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Prim's" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/mst'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Minimum Spanning Tree" />
            </ListItem>
          </Link>
          <Link to={'/algorithms/dijkstra'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Dijkstra's" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}
