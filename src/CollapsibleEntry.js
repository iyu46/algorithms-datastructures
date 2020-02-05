import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import './Sidebar.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  list: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
  },
  listItems: {
    position: 'relative',
    top:'-5.5px',
    marginTop: '0',
    marginBottom: '0',
  },
});

class CollapsibleEntry extends Component {

  constructor(props) {
      super(props);
      this.state = {open:false, searchNodes: ""};
      this.makeCollapsible = this.makeCollapsible.bind(this);
      this.makeEntry = this.makeEntry.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleClick = () => {
      this.setState({open:!this.state.open});
  };

  handleDoubleClick = (e) => {
      e.preventDefault();
      console.log("yeet");
  };

  makeCollapsible(title) {
      return (
        <ListItem button onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
            <ListItemText primary={title} className={this.props.listItems}/>
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      )
  }

  makeEntry(title) {
      return (
        <ListItem key={title} button className={this.props.nested}>
            <ListItemText primary={title} className={this.props.listItems} />
        </ListItem>
      )
  }

  render() {
      return (
        <List className={this.props.list}>
            {this.makeCollapsible(this.props.top)}
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {this.props.children.map( (string) => this.makeEntry(string))}
            </List>
        </Collapse>
        </List>
      );
    };
}

export default withStyles(styles, { withTheme: true })(CollapsibleEntry);