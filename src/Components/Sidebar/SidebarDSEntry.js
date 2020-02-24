import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

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

export default function SidebarDSEntry() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.list}>
      <ListItem button onClick={handleClick}>
          <ListItemText primary="Data Structures" />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to={'/data-structures/array'} className={classes.removeLinkStyling}>
            <ListItem button className={classes.nested} inset>
                <ListItemText primary="Array" />
                <ListItemText secondary="+ Sorted Array" />
            </ListItem>
          </Link>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Linked List" />
            <ListItemText secondary=" + Doubly-Linked List" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Stack" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Queue" />
            <ListItemText secondary="+ Deque, PQ" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Binary Search Tree" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="AVL Tree" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Hash Table" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="B-Tree" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Heap" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Disjoint Set" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
