import React from "react";

import {
  Paper,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const Stats = ({ classes, pokeData, open, handleClick }) => {
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography
          style={{ paddingTop: "7px" }}
          variant="h5"
          component="h2"
          noWrap>
          Base characteristics
        </Typography>
        <List
          component="nav"
          className={classes.list}
          aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary={`Height: ${pokeData.height}`} />
          </ListItem>
          <Divider light />
          <ListItem divider>
            <ListItemText
              primary={`Base experience: ${pokeData.base_experience}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Weight: ${pokeData.weight}`} />
          </ListItem>
          <Divider light />
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Stats" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid className={classes.stat} container spacing={3}>
              {pokeData.stats.map((stat) => (
                <Grid key={stat.stat.name} item xs={6} md={6}>
                  <Paper className={classes.statPaper}>
                    <Typography
                      color="primary"
                      variant="subtitle2"
                      style={{
                        textTransform: "capitalize",
                      }}>
                      {`${stat.stat.name}: ${stat.base_stat}`}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Collapse>
        </List>
      </Paper>
    </div>
  );
};

export default Stats;
