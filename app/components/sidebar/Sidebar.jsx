// "use client";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SidebarContent from './SidebarContent';


const drawerWidth = 250;

function Sidebar() {

  return (
    <Box sx={{ display: 'flex', zIndex: '-10', position: 'fixed', height: '100vh'}}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, height: '100vh', backgroundColor: '#fff' }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block', bottom: 0 },
            backgroundColor: '#000',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, padding: '0 0.5rem', maxHeight: 'calc(100vh - 80px)', marginTop: '80px'},
          }}
          open
        >
            <SidebarContent />
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;

    {/* <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
        keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
    >
        {drawer}
    </Drawer> */}

    // const [mobileOpen, setMobileOpen] = React.useState(false);
    // const [isClosing, setIsClosing] = React.useState(false);

    // const handleDrawerClose = () => {
    //   setIsClosing(true);
    //   setMobileOpen(false);
    // };

    // const handleDrawerTransitionEnd = () => {
    //   setIsClosing(false);
    // };

    // const handleDrawerToggle = () => {
    //   if (!isClosing) {
    //     setMobileOpen(!mobileOpen);
    //   }
    // };
