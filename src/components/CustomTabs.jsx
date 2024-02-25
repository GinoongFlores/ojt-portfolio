/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, color: "white" }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const CustomTabs = ({
  childrenOne,
  childrenTwo,
  childrenThree,
  childrenOneLabel,
  childrenTwoLabel,
  childrenThreeLabel,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }} className="p-4">
        <div className="container mx-auto mb-8">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Tabs"
              // variant="fullWidth"
              centered
            >
              <Tab label={childrenOneLabel} {...a11yProps(0)} />
              <Tab label={childrenTwoLabel} {...a11yProps(1)} />
              {childrenThree && (
                <Tab label={childrenThreeLabel} {...a11yProps(2)} />
              )}
            </Tabs>
          </Box>
        </div>

        <CustomTabPanel value={value} index={0}>
          {childrenOne}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {childrenTwo}
        </CustomTabPanel>
        {childrenThree && (
          <CustomTabPanel value={value} index={2}>
            {childrenThree}
          </CustomTabPanel>
        )}
      </Box>
    </>
  );
};

export default CustomTabs;
