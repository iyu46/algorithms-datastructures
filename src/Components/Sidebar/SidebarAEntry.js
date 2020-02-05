import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
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
          <ListItem button className={classes.nested}>
            <ListItemText primary="Insertion Sort" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Selection Sort" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Bubble Sort" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Merge Sort" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Quick Sort" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Heap Sort" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Kruskal's" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Prim's" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Minimum Spanning Tree" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Dijkstra's" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
