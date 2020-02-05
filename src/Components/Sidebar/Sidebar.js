import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, List, Divider, Paper, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import favicon from './favicon.ico';
//import CollapsibleEntry from './CollapsibleEntry';
import SidebarDSEntry from './SidebarDSEntry';
import SidebarAEntry from './SidebarAEntry';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
  },
  paper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '55px',
    height: '100%',
  },
  paperItems: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '55px',
    height: '100%',
  },
  menuButton: {
    position: 'fixed',
    top: '5px',
    left: '15px',
    color: '#555555',
    backgroundColor: 'rgba(aa, aa, aa, 0.6)',
    '&:hover': {
        color: '#eeeeee',
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
    },
  },
  menuButtonDrawer: {
    color: '#555555',
    backgroundColor: 'rgba(aa, aa, aa, 0.6)',
    '&:hover': {
        color: '#eeeeee',
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
    },
  },
  accountCircle: {
    position: 'fixed',
    bottom: '5px',
    left: '15px',
    color: '#555555',
    backgroundColor: 'rgba(aa, aa, aa, 0.6)',
    '&:hover': {
        color: '#eeeeee',
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
    },
  },
  csIcon: {
    transform: "scale(0.7)",
    position: 'relative',
    left: '7px',
    alignItems: 'center',
  },
  list: {
    padding: '0',
    paddingTop: '0 !important', 
    paddingBottom: '0 !important',
  },
  listItems: {
    marginTop: '0',
    marginBottom: '0',
  },
  listBlank: {
    color: "#ffffff",
    transition: '',
    backgroundColor: '#ffffff',
    '&:hover': {
      color: "#ffffff",
      backgroundColor: '#ffffff !important',
      transition: '',
    },
    '&:button': {
      color: "#ffffff",
      backgroundColor: '#ffffff !important',
      transition: '',
    },
  },
  listAccount: {
    position: 'fixed',
    paddingTop: 0,
    paddingBottom: 0,
    width: drawerWidth - 1,
    bottom: '0px',
    backgroundColor: '#ffffff',
    '&:hover': {
        position: 'fixed',
        bottom: '0px',
        backgroundColor: '#ffffff',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper elevation={3} square
        className={classes.paper}
      ></Paper>
      <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <ChevronRightIcon />
      </IconButton>
      <IconButton
            color="default"
            aria-label="open account"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.accountCircle}>
            <AccountCircle />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <img src={favicon} className={classes.csIcon} alt="favicon" />
          <IconButton className={classes.menuButtonDrawer} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List disablePadding classes={classes.list}>
        <Divider /> 
          {/* <CollapsibleEntry
            top="Data Structures"
            children={["Array", "Linked List", "Stack", <CollapsibleEntry top = "Queue" children = {["Priority Queue", "Deque"]}></CollapsibleEntry>, "Deque", "Binary Search Tree", "AVL Tree", "Hash table", "B-Tree", "Disjoint Set"]}/> */}
            <SidebarDSEntry/>
        <Divider />
          {/* <CollapsibleEntry
            top="Algorithms"
            children={["Insertion Sort", "Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort", "Bogo Sort", "Kruskal's", "Minimum Spanning Tree", "Prim's", "Dijkstra's"]}/> */}
            <SidebarAEntry/>
        <Divider />
          {['', ''].map((text, index) => (
            <ListItem className={classes.listBlank} key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} className={classes.listBlank} />
            </ListItem>
          ))}
        </List>
        <List className={classes.listAccount} disablePadding >
        <Divider />
          {['Account'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><AccountCircle /></ListItemIcon>
              <ListItemText primary={text} className={classes.listItems} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    </div>
  );
}
