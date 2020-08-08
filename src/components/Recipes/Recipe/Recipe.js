import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
    const Recipe = ({title, calories, image, ingredients}) => {
        
        const classes = useStyles();
  return (
      <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="200"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>Calories: {Math.round(calories)}</Typography>
          {ingredients.map(ingredient => (
            <Typography variant="body2" color="textSecondary" component="p">
                <li>{ingredient.text}</li>
            </Typography>
                ))}
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
    </div>
  );
}

export default Recipe;