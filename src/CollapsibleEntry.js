import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

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
    marginTop: '0',
    marginBottom: '0',
  },
});

class CollapsibleEntry extends Component {

  constructor(props) {
      super(props);
      this.state = {open:false, searchNodes: ""};
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

  render() {
    const {classes} = this.props;

    function makeCollapsible(title) {
        return (
          <ListItem button onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
              <ListItemText primary={title} className={classes.listItems}/>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        )
    } 

    function makeEntry(title) {
        return (
          <ListItem key={title} button className={classes.nested}>
              <ListItemText primary={title} className={classes.listItems} />
          </ListItem>
        )
    }

      return (
        <List className={classes.list}>
            {makeCollapsible(this.props.top)}
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {this.props.children.map( (string) => makeEntry(string))}
            </List>
        </Collapse>
        </List>
      );
    };
}

export default withStyles(styles, { withTheme: true })(CollapsibleEntry);