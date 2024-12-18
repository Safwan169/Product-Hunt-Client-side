import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton/IconButton";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdAddToPhotos } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import alUser from "../../../Fatching-data/alUser";
import Contex from "../../../Authentication/Contex";
import SpecificUser from "../../../Fatching-data/SpecificUser";
import AddorNot from "../../../Fatching-data/AddorNot";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "firebase/auth";
import { auth } from "../../../../../firebase.config";
import Swal from "sweetalert2";

const userDashboard = [
  {
    text: "MY Profile",
    icon: <CgProfile />,
    link: "/dashboard/myprofile",
  },
  {
    text: "Add Products",
    icon: <MdAddToPhotos />,
    link: "addproducts",
  },
  {
    text: "MY Products",
    icon: <MdOutlineProductionQuantityLimits />,
    link: "/dashboard/myproducts",
  },
];
const Moderator = [
  {
    text: "Reported",
    icon: <MdReport />,
    link: "/dashboard/reported",
  },
  {
    text: "Review",
    icon: <MdRateReview />,
    link: "/dashboard/review",
  },
];
const Admin = [
  {
    text: "Statistics",
    icon: <FcStatistics />,
    link: "/dashboard/statistics",
  },
  {
    text: "Manage Users",
    icon: <MdManageAccounts />,
    link: "/dashboard/manageUser",
  },
  {
    text: "Manage Coupons ",
    icon: <RiCoupon2Line />,
    link: "/dashboard/coupons",
  },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { user } = Contex();
  const [user2] = alUser();
  const data = user2.find((d) => d.email == user.email);
 
  const [specificUser] = SpecificUser();
  const [YesOrNOt] = AddorNot();
  console.log(YesOrNOt);

  const navigate=useNavigate()

  const handleLogOut = () => {
  

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success text-white m-3",
        cancelButton: "btn btn-danger text-white bg-red-500"
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sign Out",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Sign Out",
            text: "You have successfully Sign Out",
            icon: "success",
            showConfirmButton: false,
            timer: 2000
          });

          navigate('/'),
          signOut(auth);



        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {}
      });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >


            <MdMenuOpen className="text-white" />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to={'/'}>
         <img className="w-20 bg-cover h-12" src="https://i.ibb.co.com/Z1qkm9Y/logo-removebg-preview.png" alt="" />
            
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="border-b ">
          <MdOutlineClose
            className="p-0 cursor-pointer"
            size={25}
            onClick={handleDrawerClose}
          />
        </DrawerHeader>

        <List>
          {(
            (data?.status == "User" && userDashboard) ||
            (data?.status == "Moderator" && Moderator) ||
            (data?.status == "Admin" && Admin) ||
            []
          )?.map((text, index) => (
            <Link to={text.link}>
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem
              onClick={handleLogOut}
              className="text-red-600"
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <LuLogOut className="text-red-600" />
                </ListItemIcon>
                <ListItemText
                  primary={"Sign Out"}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>    
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
