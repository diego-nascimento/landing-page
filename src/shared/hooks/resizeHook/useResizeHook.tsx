import React from 'react';

export const useResizeHook = () => {
  const [open, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (open && window && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [setMenuOpen]);

  const OpenMenu = () => {
    setMenuOpen(true);
  };

  const CloseMenu = () => {
    setMenuOpen(false);
  };

  return {
    OpenMenu,
    CloseMenu,
    open,
  };
};
