import React from "react";
import styles from "./Cards.module.css";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUP from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUP
                start={0}
                end={confirmed.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Active Cases</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
          component={Card}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUP
                start={0}
                end={recovered.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Recovered Cases</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
          component={Card}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUP
                start={0}
                end={deaths.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
