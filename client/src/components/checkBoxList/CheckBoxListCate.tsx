import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider, createTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import styles from '@/styles/styleComponent/checkBoxList.module.css';
import axios from 'axios';


const themeStyle = createTheme({
    typography: {
      fontSize: 18,
      fontFamily: "Inter, sans-serif",
    },
    palette: {
      // text:{
      //   primary: "red"
      // }
    },
  });
  


interface MyCheckboxListProps {
  getApiCaye?: () => void
}

export default function CheckboxListCate(props: MyCheckboxListProps) {
  const [checked, setChecked] = React.useState([1]);
  const [dataCate, setDataCate] = useState([]);

  useEffect(() => {
    axios.get(`https://restaurant-truongit.onrender.com/api/v1/category`).then(res => setDataCate(res.data.data)).then((err)=> {
      console.log(err)
    });
    // axios.get(`http://localhost:8080/api/v1/category`).then(res => setDataCate(res.data.data));
  }, []);



  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ThemeProvider theme={themeStyle}>
      <Accordion className={styles.checkList}>
        <AccordionSummary
          className={styles.accordion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.titleCheckList}>Lọc sản phẩm</Typography>
        </AccordionSummary>

        <AccordionDetails className={styles.checkList}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
              dataCate ? <>
                {dataCate.map((value: any) => {
                  const labelId = `checkbox-list-label-${value.id}`;

                  return (
                    <ListItem
                      key={value.category_id}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          {'(20)'}
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                        <ListItemIcon>
                          <Checkbox
                            className={styles.iconCheck}
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>

                        <ListItemText id={labelId} primary={`Backend ${value.category_name}`} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </> : <>
                ko có
              </>
            }
          </List>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}
