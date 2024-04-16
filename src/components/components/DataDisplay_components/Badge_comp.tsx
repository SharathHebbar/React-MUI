import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';

function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar {...stringAvatar('Right Wrong')} />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar {...stringAvatar('Right Wrong')} />
        }
      >
        <Avatar {...stringAvatar('Right Wrong')} />
      </Badge>
    </Stack>
  );
}


function BadgeMax() {
    return (
      <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
        <Badge color="secondary" badgeContent=" " variant='dot' anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={1} anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={99} anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999} anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}>
          <MailIcon />
        </Badge>
      </Stack>
    );
  }



  
function notificationsLabel(count: number) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
  
 function AccessibleBadges() {
    return (
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge badgeContent={100} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    );
  }
  

export {
    BadgeAvatars,
    BadgeMax,
    AccessibleBadges
}